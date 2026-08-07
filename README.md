from hypium import *
# !/usr/bin/env python
# coding: utf-8

from devicetest.utils.file_util import get_resource_path

from aw.common.publicsAW import *
from perfModel.ResourceUsageCase.offload.changjing.base.PerformanceDynamic_taobao import \
    PerformanceDynamic_taobao as testsuite

"""
1.启动淘宝（等待5s）
2.点击闪购，进入闪购页面（等待2s)
3. 定位选择“武汉未来智汇城”（等待2s)
4. 搜索“蜜雪冰城（未来科技城（华为）店）”（等待3s)
5. 店铺内搜索“冰鲜柠檬水”，点击进入该商品（等待2s）
6. 加入购物车4杯
7. 点击去结算（等待2s）
8. 地址默认“武汉未来智汇城A10栋”，点击提交订单（需要餐具，商家依据参量提供）
9. 退出该页面，取消订单
10. 退应用首页
11. 上滑返回桌面
"""


class PerformanceDynamic_taobao_0020(testsuite):
    @testsuite.step_method
    def case_step_1(self):
        """
        1.启动淘宝（等待5s）
        """
        self.start_taobao()

        image_path = r'resource/com_taobao_taobao4hmos/cancel.jpeg'
        cancel_button = self.d.find_image(image_path, mode="template", similarity=0.7)
        if cancel_button:
            self.d.touch(cancel_button, wait_time=2)

    @testsuite.step_method
    def case_step_2(self):
        """
        2.点击闪购，进入闪购页面（等待2s)
        """
        self.d.touch(BY.text("闪购"), wait_time=2)
        image_path = r'resource/com_taobao_taobao4hmos/cancel.jpeg'
        cancel_button = self.d.find_image(image_path, mode="template", similarity=0.7)
        if cancel_button:
            self.d.touch(cancel_button, wait_time=2)
        if self.d.find_component(BY.text('去使用')):
            self.d.touch(BY.text('去使用'), wait_time=2)
        if self.d.find_component(BY.text('今日福利')):
            self.d.touch((1003, 784), wait_time=2)
        if self.d.find_component(BY.text('开心收下')):
            self.d.touch((563, 1925), wait_time=2)

    @testsuite.step_method
    def case_step_3(self):
        """
        3. 定位选择“武汉未来智汇城”（等待2s)
        """
        dingwei = self.d.find_all_components(BY.type("button"), 0)
        if dingwei is None:
            dingwei = (259, 457)
        self.d.touch(dingwei, wait_time=2)
        # com = self.d.find_component(BY.text("腾飞科汇城西楼", MatchPattern.CONTAINS))
        # if com is None:
        #     self.d.touch(BY.text("重新定位", MatchPattern.CONTAINS), wait_time=2)
        # self.d.touch(BY.text("腾飞科汇城西楼", MatchPattern.CONTAINS), wait_time=2)
        # self.d.touch((387, 893), wait_time=2)
        # 直接开启定位


    @testsuite.step_method
    def case_step_4(self):
        """
        4. 搜索“蜜雪冰城（未来科技城（华为）店）”（等待3s)
        """
        x, y = self.d.get_component_pos(BY.text("搜索"))
        self.d.touch((x - 566, y), wait_time=2)
        self.d.input_text((494,195), "蜜雪冰城")
        self.d.wait(1)
        if self.d.find_component(BY.text("搜索")):
            self.d.touch(BY.text("搜索"), wait_time=2)
        else:
            self.d.touch((1137, 214), wait_time=2)

    @testsuite.step_method
    def case_step_5(self):
        """
        5. 店铺内搜索“冰鲜柠檬水”，点击进入该商品（等待2s）
        """
        # self.d.touch(BY.type('genericContainer').text("蜜雪冰城(东滩社区店)"))
        # self.d.touch((140, 742), wait_time=2)
        # self.d.wait(10)
        if self.d.find_component(BY.text("综合")):
            x, y = self.d.get_component_pos(BY.text("综合"))
            self.d.touch((x+60, y+320), wait_time=4)
        else:
            self.d.touch((144, 766), wait_time=4)

        # x, y = self.d.get_component_pos(BY.text("收藏"))
        # self.d.touch((x - 313, y), wait_time=2)
        if self.d.find_component(BY.text("蜜雪冰城", MatchPattern.STARTS_WITH)):
            self.d.touch((665, 206), wait_time=2)
        else:
            self.d.touch((518, 210))
            self.d.wait(4)

        # self.d.input_text(BY.type("textField"), "冰鲜柠檬水")
        self.d.input_text(BY.type("TextInput"), "冰鲜柠檬水")
        # self.d.input_text((577 / 1260, 207 / 2720), "冰鲜柠檬水")
        self.d.wait(2)
        # self.d.touch(BY.text("搜索"), wait_time=3)
        # self.d.touch(BY.text("选规格"), wait_time=2)
        bound = self.d.find_image(image_path_pc=get_resource_path('com_taobao_taobao4hmos/bingxian1.jpeg'))
        x, y = bound.get_center()
        self.d.touch((x+850, y+110), wait_time=2)
        # if self.d.find_component(BY.text("选规格")):
        #     self.d.touch(BY.text("选规格"), wait_time=2)
        # else:
        #     self.d.touch((1015, 544), wait_time=2)


    @testsuite.step_method
    def case_step_6(self):
        """
        6. 加入购物车4杯
        """

        swipes_up(self.d, 2, 2)

        # x, y = self.d.get_component_pos(BY.text("1"))
        for i in range(3):
            # self.d.touch((x + 120, y), wait_time=2)
            self.d.touch_image(image_path_pc=get_resource_path('com_taobao_taobao4hmos/taobao020_add.jpeg'),
                               similarity=0.7,wait_time=2)

        # self.d.touch(BY.text("加入购物车"), wait_time=2)
        self.d.touch_image(image_path_pc=get_resource_path('com_taobao_taobao4hmos/taobao020_ok.jpeg'), similarity=0.7,
                           wait_time=2)

    @testsuite.step_method
    def case_step_7(self):
        """
        7. 点击去结算（等待2s）
        """
        # self.d.touch(BY.text("去结算"), wait_time=2)
        self.d.touch_image(image_path_pc=get_resource_path('com_taobao_taobao4hmos/taobao020_pay.jpeg'), similarity=0.7,
                           wait_time=2)

    @testsuite.step_method
    def case_step_8(self):
        """
        8. 地址默认“武汉未来智汇城A10栋”，点击提交订单（需要餐具，商家依据参量提供）
        """
        if self.d.find_component(BY.text("请选择收货地址")):
            self.d.touch(BY.text("请选择收货地址"), wait_time=2)

        peisong = self.d.find_component(BY.text("外卖配送"))
        if peisong:
            x, y = self.d.get_component_pos(BY.text("外卖配送"))
            self.d.touch((x, y + 137), wait_time=2)

        x, y = self.d.get_component_pos(BY.text("选择收货地址"))
        self.d.touch((x, y + 200), wait_time=2)

        self.d.touch(BY.text("提交订单"), wait_time=2)

        comp = self.d.find_all_components(BY.text("需要餐具，商家依据餐量提供"), -1)
        self.d.touch(comp, wait_time=5)

    @testsuite.step_method
    def case_step_9(self):
        """
        9. 退出该页面，取消订单
        """
        self.d.swipe_to_back()
        time.sleep(4)
        if self.d.find_component(BY.text("放弃")):
            self.d.touch(BY.text("放弃"), wait_time=4)
        self.d.touch(BY.text("取消订单"), wait_time=4)
        self.d.touch(BY.text("仍要取消"), wait_time=4)


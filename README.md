# !/usr/bin/env python
# coding: utf-8

from aw.common.publicsAW import *
from perfModel.ResourceUsageCase.offload.changjing.base.PerformanceDynamic_Douyin import (
    PerformanceDynamic_Douyin as testsuite,
)

"""
1、启动抖音(等待5s)
2、进入拍视频页面：点击“+”(等待2s），点击视频（等待2s）
3、进行拍照：点击拍照按钮(等待1s),等待10s,点击停止拍摄按钮（等待2s）
4、返回拍摄界面：侧滑返回（等待2s）
5、返回应用首页
6、上滑返回桌面
"""


class PerformanceDynamic_Douyin_0080(testsuite):
    @testsuite.step_method
    def case_step_1(self):
        """
        1、启动抖音(等待5s)
        """
        self.start_douyin()

    @testsuite.step_method
    def case_step_2(self):
        """
        2、进入拍视频页面：点击“+”(等待2s），点击视频（等待2s）
        """
        self.d.touch((535, 2176), wait_time=2)

        # self.d.touch(BY.text("视频"), wait_time=2)
        self.d.touch((555,1787), wait_time=2)

    @testsuite.step_method
    def case_step_3(self):
        """
        3、进行拍照：点击拍照按钮(等待1s),等待10s,点击停止拍摄按钮（等待2s）
        """
        self.d.touch((561, 1983), wait_time=1)
        # self.d.check_component_exist(BY.text("闪光灯"), expect_exist=False)
        self.d.wait(10)
        self.d.touch((559, 1991), wait_time=2)
        # self.d.check_component_exist(BY.text("下一步"))

    @testsuite.step_method
    def case_step_4(self):
        """
        4、返回拍摄界面：侧滑返回（等待2s）
        """
        self.d.touch((265, 383), wait_time=2)  #点击左上角清空内容
        self.d.swipe_to_back()

        self.d.wait(2)

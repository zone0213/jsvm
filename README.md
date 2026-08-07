if self.d.find_component(BY.text("重新定位")):
            self.d.touch(BY.text("重新定位"), wait_time=3)
        elif self.d.find_component(BY.text("当前位置")):
            self.d.touch(BY.text("当前位置"), wait_time=3)
        else:
            # 如果没找到文字，尝试点击通常“当前位置”所在的图标坐标（根据机型可能不同）
            # 或者直接侧滑返回，因为进入闪购时通常已经默认了当前位置
            self.d.swipe_to_back()
        
        self.d.wait(2)

###day03复习
	1.布局
		布局包裹器
		滑屏元素（动态生成）
			---queryselector的坑
			---有时绘制跟不上js引擎的渲染
					定时器
	
	2.基本的滑屏
		拿到元素和手指一开始（点击到布局包裹器上时）的位置
		拿到元素实时的位置，再去计算手指实时的偏移量，将偏移量实时的同步给滑屏元素
	
	3.
		定位版（图片的下标    ul的位置）
			offsetLeft：累加的过程
		2d变换版（单独的图层）
			---变量（业务逻辑变得很复杂）
			---定义了css函数
				节点的属性来管理变换类型  他所对应的值
				2个参数
					读取
				3个参数
					设置（单位）
					循环节点的属性
	
	4.无缝 自动滑屏
		无缝：复制一组图片，当点击第一组第一张时瞬间跳到第二组的第一张
						      当点击第二组最后一张时瞬间跳到第一组的最后一张
		
		自动滑屏：循环定时器
					函数包裹（重启定时器）
						清定时器（循环定时器的逻辑没有必要同一时刻开启多次;暂停逻辑）
		
		
		自动滑屏和无缝的冲突
			使用同一个index变量就可以







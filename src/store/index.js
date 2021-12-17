import Vuex from "vuex"
import Vue from 'vue'
Vue.use(Vuex)


const state={
  showMessage:{
    show:false,
    message:"错误提示"
  },

isVideoPage:false,
loading:false,
iscopy:false, 
 carouselImgs: [
  require("../assets/slideimg/1.jpg"),
  require("../assets/slideimg/2.jpg"),
  require("../assets/slideimg/3.jpg"),
  require("../assets/slideimg/4.jpg"),
],
mainData:[
    
    {
      cid: "1",
      name: "今日头条",
      link:"https://www.toutiao.com",
      logo: require("../assets/logo/jinritoutiao.jpg"),
      firstbrief:"一款基于数据挖掘的推荐引擎产品，是国内移动互联网领域成长最快的产品服务之一。在这里，人们可以根据自己的爱好选择想要观看的头条咨询，足不出户便可观天下事。",
			brief: "<p>今日头条是北京字节跳动科技有限公司开发的一款基于数据挖掘的推荐引擎产品，为用户推荐信息、提供连接人与信息的服务的产品。由张一鸣于2012年3月创建，2012年8月发布第一个版本。<p>2018年9月29日，针对网络转载版权专项整治中发现的突出版权问题，国家版权局在京约谈了今日头条，要求其进一步提高版权保护意识，切实加强版权制度建设，全面履行企业主体责任，规范网络转载版权秩序。",
			businessIntro: "<h3>头条寻人</h3><p>头条寻人是由今日头条在2016年2月发起的公益寻人项目。它借助互联网+的精准地域弹窗技术，对寻人或寻亲信息进行精准的定向地域推送，可以帮助家属寻找走失人员，帮助被救助管理机构救助的疑似走失人员寻找家人。截止2017年8月30日，立项一年半的头条寻人项目已成功找到3000位走失者，其中，年纪最大的走失者为101岁，走失时间最长57年，最多一天找到12位走失者，最快5分钟找到走失者。</p><h3>算数功能</h3><br>2015年1月20日，今日头条在北京国家会议中心举办了“算数•年度数据发布会”。数据发布会的主题名为“算数”，实际上指的是“算法”与“数据”。今日头条依托其独到的推荐引擎技术，其倡导的“个性化阅读”理念已经成为行业的发展趋势，并且被众多老牌互联网公司模仿。<br><h3>头条号</h3><br>“头条号”是今日头条针对媒体、国家机构、企业以及自媒体推出的专业信息发布平台，致力于帮助内容生产者在移动互联网上高效率地获得更多的曝光和关注。截至2016年11月底，已有超过39万个个人、组织开设头条号。其中约有30万自媒体头条号，以及政府、媒体、公司等其他类型的头条号约9万个。<br><h3>精准辟谣</h3><br>通过机器算法+用户反馈的方式，高效识别虚假信息。当有大量用户举报一篇内容为虚假信息或在某篇内容的评论区中密集出现“假新闻”等类似关键词，机器即可自动识别，将其提交至审核团队，进行高优先级的复审。甄别虚假信息后，运营团队将立刻停止虚假信息的推送和展示，并对发布虚假信息的来源进行处罚。信息平台还通过虚假信息的阅读记录，将阅读过此信息的用户识别出来，进行定向辟谣，避免了辟谣时可能的次生传播。",
			technology: "<h2>大数据</h2><b>1、文章抓取与分析</b><br>我们日常产生原创新闻在1万篇左右，包括各大新闻网站和地方站，另外还有一些小说，博客等文章。这些对于工程师来讲，写个Crawler并非困难的事。<br>接下来，今日头条会用人工方式对敏感文章进行审核过滤。此外，今日头条头条号目前也有为数不少的原创文章加入到了内容遴选队列中。<br>接下来我们会对文章进行文本分析，比如分类，标签、主题抽取，按文章或新闻所在地区，热度，权重等计算。<br><b>2、用户建模</b><br>当用户开始使用今日头条后，对用户动作的日志进行实时分析。对用户的兴趣进行挖掘，会对用户的每个动作进行学习。产生的用户模型数据和大部分架构一样，保存在MySQL/MongoDB（读写分离）以及Memcache/Redis中。<br>随着用户量的不断扩展大，用户模型处理的机器集群数量较大。2015年前为7000台左右。其中，用户推荐模型包括以下维度：<ul><li>用户订阅</li><li>标签</li><li>部分文章打散推送</li><li>此时，需要每时每刻做推荐。</li><br><b>3、大数据技术：</b><br>新用户的“冷启动”:今日头条会通过用户使用的手机，操作系统，版本等“识别”。另外，比如用户通过社交帐号登录，如新浪微博，头条会对其好友，粉丝，微博内容及转发、评论等维度进行对用户做初步“画像”。<ul><p>分析用户的主要参数如下：</p><li>关注、粉丝关系</li><li>关系</li><li>用户标签</li><br>除了手机硬件，今日头条还会对用户安装的APP进行分析。例如机型和APP结合分析，用小米，用三星的和用苹果的不同，另外还有用户浏览器的书签。头条会实时捕捉用户对APP频道的动作。另外还包括用户订阅的频道，比如电影，段子，商品等。",
			techEffect: "<h2>4、效果</h2><p>推荐系统，也称推荐引擎。它是今日头条技术架构的核心部分。包括自动推荐与半自动推荐系统两种类型：</p><h3>1） 自动推荐系统</h3><p>自动候选，自动匹配用户，如用户地址定位，抽取用户信息，自动生成推送任务，这时需要高效率，大并发的推送系统，上亿的用户都要收到。</p><h3>2）半自动推荐系统</h3><p>自动选择候选文章，根据用户站内外动作</p><br>头条的频道，在技术侧划分的包括分类频道、兴趣标签频道、关键词频道、文本分析等，这些都分成相对独立的开发团队。目前已经有300+个分类器，仍在不断增加新的用户模型，原来的用户模型不用撤消，仍然发挥作用。<p>在还没有推出头条号时，内容主要是抓取其它平台的文章，然后去重，一年几百万级，并不太大。主要是用户动作日志收集，兴趣收集，用户模型收集。</p><p>资讯App的技术指标，比如屏幕滑动，用户是不是对一篇都看完，停留时间等都需要我们特别关注</p><h3>5、数据存储</h3><p>今日头条使用MySQL或Mongo持久化存储+Memched（Redis），分了很多库（一个大内存库），亦尝试使用了SSD的产品。</p><p>今日头条的图片存储，直接放在数据库中，分布式保存文件，读取的时候采用CDN。</p><h3>6、消息推送</h3><p>消息推送，对于用户: 及时获取信息。对运营来讲，能够 提⾼⽤用户活跃度。比如在今日头条推送后能够提升20%左右的DAU，如果没有推送，会影响10%左右 DAU（2015年数据）。<br>推送后要关注的ROI：点击率，点击量。能够监测到App卸载和推送禁用数量。<br>今日头条推送的主要内容包括突发与热点咨讯，有人评论回复，站外好友注册加入。<br>在头条，推送也是个性化<br>比如：按照城市：辽宁朝阳发生的某个新闻事件，发给朝阳本地的用户。按照兴趣：比如京东收购一号店，发给互联网兴趣的用户。</p><p><em>版权声明：本文为CSDN博主「清平の乐」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。原文链接：https://blog.csdn.net/ZZQHELLO2018/article/details/105469812</em></p>"
	
    },
    {
      cid: "2",
      name:"哔哩哔哩",
      logo: require("../assets/logo/bilibili.jpg"),
      firstbrief:"国内知名的弹幕视频网站，这里有及时的动漫新番、活跃的ACG氛围，有创意的up主。在这里大家可以找到许多欢乐，既可以观看他人作品，也能够自己作创客。",
      link:"https://www.bilibili.com",
        brief:"<p>哔哩哔哩，英文名称：bilibili，简称B站，现为中国年轻世代高度聚集的文化社区和视频平台，该网站于2009年6月26日创建，被粉丝们亲切地称为“B站”。2018年3月28日，哔哩哔哩在美国纳斯达克上市。2021年3月29日，哔哩哔哩正式在香港二次上市。,<p>B站早期是一个ACG（动画、漫画、游戏）内容创作与分享的视频网站。经过十年多的发展，围绕用户、创作者和内容，构建了一个源源不断产生优质内容的生态系统，B站已经涵盖7000多个兴趣圈层的多元文化社区，曾获得QuestMobile研究院评选的“Z世代偏爱APP”和“Z世代偏爱泛娱乐APP”两项榜单第一名并入选“BrandZ”报告2019最具价值中国品牌100强。",   
        businessIntro:"<h3>直播：</h3><br>哔哩哔哩（bilibili）直播是B站推出的国内首家关注ACG直播的互动平台，内容有趣、活动丰富、玩法多样，并向电竞、生活、娱乐领域不断延伸。<br>“电竞+游戏”都是B站直播的重要品类。B站已经覆盖了包括《英雄联盟》LPL职业联赛、《DOTA2》TI国际邀请赛、《王者荣耀》KPL职业联赛等在内的各大赛事；在泛娱乐直播方面，B站则以音乐、舞蹈、绘画、美食、萌宠、明星访谈为主。<br>此外，B站也在开拓学习直播、虚拟主播等新兴直播品类；2019年一季度内，共有超6000位虚拟主播在B站开播，观看人数近600万。<br>2019年12月6日，B站宣布获得《英雄联盟》全球总决赛S10至S12连续三年（2020年至2022年）的国内独家直播版权。<br> 2019年12月19日，哔哩哔哩直播宣布签约冯提莫。<h3>游戏：</h3><br>B站是国内重要的二次元游戏分发渠道，代理了超500款联运手游，13款独家代理游戏，及1款自研手游。从2014年开始，bilibili开启游戏联运和代理发行业务，成功推出《梦100》《FGO》《碧蓝航线》《幻想战姬》《梦王国与沉睡的100王子》《ICHU偶像进行曲》《Fate/Grand Order》（中文译名：《命运-冠位指定》）《明日方舟》《BanG Dream！少女乐团派对！》等多款业内知名游戏，并帮助《阴阳师》《崩坏3》等产品获得成功，是当前国内一家二次元游戏发行平台。<br>2019年，与腾讯全球联合发行的听觉探案游戏《Unheard-疑案追声》在Steam上线后升至国区热销榜第二位，一周之内售出15万份。<br>2019年7月，B站首次举办独立游戏发布会，发布包括《一起开火车！》、《妄想破绽》在内的5款独立游戏。<h3>广告：</h3><br>B站广告业务主要分为效果广告和品牌广告。2018年，B站举办了对广告主的广告推介会AD TALK，首次开放自制内容的招商。<br>在2019年的AD TALK上，B站明确了自己的商业化进程，宣布2020年将向所有品牌合作伙伴开放生态。B站确定开放的生态资源包括14部国产动画、15部纪录片、6部综艺、30余位UP主、11项大事件以及电竞、虚拟偶像等。<h3>电商:</h3>B站拥有自己的电商平台“会员购”，于2017年上线，以漫展演唱会票务、手办、模型、潮玩、周边的销售为主，在不到两年的时间已经占领了二次元票务域最大的市场份额。2019年10月底，B站的电商业务GMV已经突破10亿元。<h3>漫画：</h3><br>哔哩哔哩漫画是国内领先的正版漫画发行平台之一，于2018年11月上线。拥有《火影忍者》《JOJO的奇妙冒险》《航海王》《天官赐福》《步天歌》等超过 12000部作品，与逾千名创作者达成合作。2018年12月12日，B站宣布与网易签署收购协议，将对旗下网易漫画的主要资产进行收购，其中包括APP、网站、部分漫画版权及其相关使用权益。<h3>电竞:</h3><br>2018年，B站正式成立子公司哔哩哔哩电竞，主要经营业务包括多支顶级职业联赛电竞俱乐部的运营、电竞艺人经纪以及电竞内容制作等。B站拥有《英雄联盟职业联赛》和《守望先锋联赛》两大世界级电竞赛事席位，哔哩哔哩电竞已拥有BLG、杭州闪电队Spark电竞俱乐部。",
         technology:"B站弹幕数据分析<ol><li>各种弹幕的发送时间：通过统计各类弹幕发送时间来确定哪个时间段的内容更受观众的欢迎。</li><li>各个弹幕的大小：通过统计各个弹幕发送的不同大小可以看出更多的人会选择使用移动观看，移动端观看BILIBILI已经很普遍了。</li><li>各个弹幕的发送位置:可以看出更多的人发的是普通弹幕，少数人会发送更加精准的顶部弹幕和底部弹幕。</li></ol>",
         techEffect:"<br>通过数据分析出观众的喜好以及活跃的时间段，有针对性地作出内容的调整，迎合需求。如：发现更多的人还是选择在移动端观看视频，移动观看视频已经是人们的首选。更多的人发送的弹幕是普通弹幕，而极少数人会选在固定的时间发送顶部弹幕或者底部弹幕，证明大多数人不会去特意调整弹幕位置。其次发现视频中人们更喜欢的角色或场景，因为在这个角色出现的时间段发送的弹幕最多，因此我们可以认为在有这两个作为封面时，可以吸引更多的人观看视频，或者以这几个人作为周边可以卖的会更好。"
        
    },
    {cid:"3",
			"name":"优酷",
      logo: require("../assets/logo/youku.jpg"),
      link:"https://www.youku.com",
      firstbrief:"中国领先的视频播放网站，属于阿里巴巴旗下。秉持着“快者为王”的产品理念，注重用户体验，不断完善服务策略，其卓尔不群的“快速播放、快速发布、快速整合”深得人心。",
			"brief":"<p> 优酷网是由古永锵于2006年6月21日创立，12月21日正式上线的视频平台。优酷现为阿里巴巴集团数字媒体及娱乐业务的核心业务之一，也是阿里巴巴集团“Double H（健康与快乐）”策略的组成部分。优酷现支持PC、电视、移动三大终端，兼具版权、合制、自制、用户生成内容(UGC)、专业生成内容(PGC)及直播等多种内容形态。优酷的日均付费用户规模正持续健康增长，于截至2020年3月31日止财政年度同比增长超过50%。2020年，优酷公布新内容策略，以头部剧集与超级综艺为主轴，通过“五大剧场、三条综艺排播带”形成特定用户心智，持续提供高品质内容。</p>",
			"businessIntro":"作为中国数字娱乐平台，优酷的内容体系由剧集、综艺、电影、动漫四大头部内容矩阵和资讯、纪实、文化财经、时尚生活、音乐、体育、游戏、自频道八大垂直内容群构成，拥有国内最大内容库。电影片库位居全网第一，院线新片覆盖80%。</p><p> 优酷所提供的服务覆盖会员、直播、VR、家庭娱乐和经纪业务。 </p><h3> 剧集 </h3><p> 优酷剧集覆盖80%以上一线卫视大剧；联合出品50余部近400集优质网剧；海外剧共638部，今年新增67部，其中包含2部中韩同步大剧、3部艾美奖优质剧。 </p><p> 2017年，优酷提出“超级剧集”的概念，并以有影响力的IP、有号召力的主创、电影级制作作为衡量标准。 在此基础上，优酷陆续推出《大军师司马懿之军师联盟》、《春风十里不如你》、《白夜追凶》、《将军在上》等超级剧集。借此，2017年暑期档优酷剧集播放量占市场总量49%，2017年全年优酷独播网剧以539.2亿的播放量占据市场第一。</p><h3> 综艺</h3><p> 优酷拥有国产综艺300余档，覆盖近90%卫视节目；海外版权库275档，覆盖韩国、英国和美国。</p><p> 2016年，优酷自制综艺《火星情报局》开启了超级网综时代，自带原创烙印的优酷综艺，经过2017年对小而美原创综艺的探索后，在2018年正式推出首个聚焦于垂直青年文化的原创网综厂牌“这就是”系列，在用户关注度和口碑上都获得了积极的市场反馈。 </p><p> “这就是”系列先后涉足街舞、机器人格斗、街头篮球等多个潮流文化领域， 《这就是街舞》《这就是铁甲》《这就是灌篮》三档原创节目在豆瓣的评分分别达8.6、8.1、8.3 ，成为2018年品质网综的代名词，同时也成为行业内首个获得市场认可的综艺厂牌。</p><h3> 人文 </h3><p> 优酷人文包括文化节目与纪录片两大频道。</p><p> 2012年，《晓说》第一季上线，标志优酷人文诞生；2017年，平台发力纪录片赛道。2019年，优酷经典内容焕新，《圆桌派》第四季度单期播放量上升一倍 ，《局部》《一千零一夜》播放量提高50%，并孵化出《他乡的童年》《对白》《豫见后来》等新IP。同年32部豆瓣8分以上纪录片中，优酷占15席，居新媒体平台第一。 此外，优酷出海近20部文化与纪录片节目，包括《探世界》、《局部》第2季、《他乡的童年》、《最美中国》全系列等。</p><h3> 体育 </h3><p> 体育囊括了国内90%的体育内容资源，包括欧洲五大联赛、欧冠、中超、中国之队、亚冠等足球赛事版权，同时拥有UFC、WWE、排超等垂直精品赛事版权，形成了以足球产业为核心的体育内容矩阵。 2018年7月，阿里巴巴集团与苏宁体育达成战略合作，优酷体育和苏宁体育旗下PP体育成为双方合作的落地平台，在赛事直播、联合运营上展开合作。 </p><h3> 少儿 </h3><p> 小小优酷是优酷旗下独立少儿品牌。共有4000余部剧集动画，500余部剧场版动画；小小优酷App汇聚了3000多部高品质中外动画；每季度采购90%日本新番，覆盖top100热门动画。</p><h3> 会员 </h3><p> 优酷为VIP会员提供六大精彩权益，包括内容、功能、文娱、生活、明星和线下互动。 </p>",
			"technology":"优酷意识到大宣发的重要性是战略眼光的体现，把握住大宣发的风口则需要强大的跨平台的生态协同能力，和对用户的需求和行为做出精准洞察的能力。为了赢得这一局，优酷为大宣发准备了两个支点：全面打通阿里和阿里文娱两大平台资源的“开”计划和基于大数据的用户洞察和追踪。</p><p> 以大数据为核心的用户洞察和追踪是火药库，用技术攻破大宣发在营销实战中面临的各种问题。</p><p> 阿里巴巴文化娱乐集团大优酷事业群首席运营官苏立表示：“传统营销进入了新能源的新阶段，内容、数据以及生态将成为助力品牌发展的新能源，它是助力广告主不断积累品牌、提升溢价价值的新势能。” </p>",
			"techEffect":"大数据将进一步赋能内容营销和精准营销，基于人群洞察和算法的动态更新，捕捉更多相似的泛客群，大幅提升广告投放的效果。”苏立说，在阿里全域营销生态系统中，每一个Uni ID 是打通的，阿里都可以还原这个ID背后代表的真实消费者，了解这个消费者的行为和诉求，从真正意义上帮助商家实现“品销全营销”。 </p><p> 依托启明星Plus和云图这两个产品，可以用大数据找到品牌用户群体最喜欢的内容，再把最精准的内容给最精准的消费者。同时，在广告投放之后，持续追踪用户对相关产品的浏览搜查轨迹，通过研究用户行为逻辑为广告主提供更好的营销方案。 </p>",
		},
    { cid:"4",
			"name":"抖音",
      logo: require("../assets/logo/douyin.jpg"),
      link:"http://www.douyin.com",
      firstbrief:"字节跳动公司开发的一款自带音乐属性的短视频社区，帮助用户表达自我，记录美好生活，在这里，可以了解最新的明星和事件，关注身边亲朋好友的日常生活，拉近彼此的距离。",
			"brief":"<p> 抖音，是由字节跳动孵化的一款音乐创意短视频社交软件。该软件于2016年9月20日上线，是一个面向全年龄的短视频社区平台。</p><p> 抖音应用人工智能技术为用户创造多样的玩法，用户可以通过这款软件选择歌曲，拍摄音乐短视频，形成自己的作品并分享给平台上的用户。</p>",
			"businessIntro":"<p> 抖音是一个专注15秒视频的短视频分享社区，用户可以选择歌曲，配以短视频，形成自己的作品。也可以自己上传剪辑作品。它与小咖秀类似，但不同的是，抖音用户可以通过视频拍摄快慢、视频编辑、特效（反复、闪一下、慢镜头）等技术让视频更具创造性，而不是简单地对嘴型。</p><p> 2017年12月20日，抖音推出了线上跳舞机功能。 </p><p> 2018年6月，抖音上线内容营销工具——“DOU+”功能。 </p><p> 2018年9月，抖音上线新功能“抢镜”，在最新版的抖音app中，用户可以通过“抢镜”功能录制小视频，与喜欢的内容及创作者互动。</p><p> 2021年1月，抖音支付已在抖音APP内正式上线。</p><p> 2021年4月，抖音最新的内测版中加入了一个新的社交功能 ——“朋友聊天室”，支持抖音强大的滤镜美颜和道具功能。</p><p> 2021年6月，抖音电脑网页版正式上线。</p><p> 2021年6月，抖音电脑网页版正式上线。</p><p> 2021年6月28日，抖音 App 再次更新，本次内测了一些新功能，同时抖音音乐正式上线，大大提高了用户之间的互动性，向社交领域再次迈出一大步。</p>",
			"technology":"<p> 我们以抖音为例，我们在刷抖音视频时，经常会有如下几个感受： 感觉抖音的每个短视频都正戳兴趣点，自己是越刷越上头，完全停不下来； </p><p> 刷抖音是感受不到时间流逝的——“明明我才刷了一小会，怎么时间就过去一个小时啦？”自己好像中了抖音的“毒”——工作之余，闲暇时间，总是心痒难耐想要打开抖音刷一刷；</p><p> 事实上这是抖音的推荐系统起到的作用。我们知道推荐任务中，主要获取的是两方面的数据，一个是视频特征，一个是用户特征。对于用户来讲，抖音会实时的记录用户对某个视频的点击、播放、停留、关注、评论、点赞、转发等行为，并根据这些特征离线或实时的进行计算。</p><p> 抖音之所以能够让用户“越刷越上头”还在于其对推荐的改进，如图所示：</p><p> （1）当一个新用户上传一个视频时，首先由设计好的系统对视频进行自动打标签，获取视频的显式特征信息； </p><p> （2）其次将该视频先随机推荐给1万个用户（又称流量池）；</p><p> （3）这些被推荐的用户根据其对这个新上传的视频进行相关交互（点击、播放、停留、关注、评论、点赞、转发等），根据交互的数据，来判断当前的视频质量如何（尤其是该视频的完播率如何， 完播率意指整个视频完整的被观看的次数占比），根据数据分析结果，决定是否进一步扩大推荐的范围； </p><p> （4）更优秀的视频会被推荐到更大的流量池，以获得更多的用户浏览量。</p>",
			"techEffect":"<p> 因此这套机制可以避免资源倾斜问题，即便是一些新用户（或使用小号），在上传的视频中，如果质量好，都有机会获得更多的浏览量，该推荐机制避免了系统偏向大号大V的问题。</p><p> 另外，抖音推荐还会涉及到对社交网络的挖掘。在基于内容给的推荐时，根据用户关注的主播，或已查看相关主播的多个视频时，可根据该主播的其他粉丝的兴趣来进行推荐，这一部分则可以涉及到社交关系知识图谱，以此发现更多新的视频。这也就是说，当你在持续刷抖音时，总会发现一些新的感兴趣的视频。 </p><p> ———————————————— </p><p><em> 版权声明：本文为CSDN博主「华师数据学院•王嘉宁」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。原文链接：https://blog.csdn.net/qq_36426650/article/details/108720429 </em></p>",
		},
    {cid:"5",

			"name":"爱奇艺",
      logo: require("../assets/logo/aiqiyi.jpg"),
      link:"https://iqiyi.com",
      firstbrief:"一款视频播放软件，覆盖了各大主流视频网站最热门、最经典的视频内容，人们可以快速找到自己感兴趣的节目。作为一个独立视频平台，在这里，娱乐、综艺、体育等内容应有尽有。",
			"brief":"<p>爱奇艺是由龚宇于2010年4月22日创立的在线视频网站 ，2011年11月26日启动“爱奇艺”品牌并推出全新标志。爱奇艺成立伊始，坚持“悦享品质”的公司理念，以“用户体验”为使命，通过持续不断的技术投入、产品创新，为用户提供清晰、流畅、界面友好的观影体验。</p><p> 2013年5月7日百度收购PPS视频业务，并与爱奇艺进行合并，现为百度公司旗下平台。2018年3月29日，爱奇艺在美国纳斯达克挂牌上市，股票代码：IQ。在美国纽约时代广场，爱奇艺打出大幅广告庆祝上市。</p>",
			"businessIntro":"<p>爱奇艺平台所放送的内容除了平台原创内容之外，还包括了合伙制作的内容以及经过算法技术筛选之后播出的第三方内容，涵盖电视剧集、综艺、电影、体育赛事等多项类别。</p><p> 高质量的内容分发不仅能够增加内容分发项目的收入，同时也可以提高用户粘性，增加用户对爱奇艺的认可度。自2015年以来，爱奇艺在剧集和综艺领域都推出了表现不错的作品，剧集方面有《老九门》、《无证之罪》、《延禧攻略》、《破冰行动》等热门剧目。</p><p> 综艺方面推出的厂牌也非常有分量，代表作有《中国有嘻哈》、《奇葩说》、《青春有你》等，2019年暑期推出的《乐队的夏天》也非常受欢迎。</p><p> 从社交性来看，爱奇艺推出了基于娱乐内容的社交媒体平台——爱奇艺泡泡。通过娱乐热点追踪、加入兴趣圈层和关注爱豆的方式吸引粉丝在此平台上与明星互动，增强用户参与感。 </p>",
			"technology":"><p> 数据作为互联网时代的基础生产资料，在各大公司企业拥有举足轻重的地位。数据的价值在互联网公司的体现，大致而言可以分成三类：</p><p> （1）发掘数据中的信息来指导决策，如产品运营、用户增长相关的BI报表 </p><p> （2）依托数据优化用户体验和变现效率，如信息分发场景下的个性化推荐、效果广告等 </p><p> （3）基于数据统计的业务监控，如监控大盘、安全风控等在这些体现大数据价值的业务场景上，存在一个普遍的规律，即数据产生的价值，随着时间的推移而衰减。</p><p>因此，随着公司业务的发展，传统的T+1式（隔日）的离线大数据模式越来越无法满足新兴业务的发展需求。开展实时化的大数据业务，是企业深入挖掘数据价值的一条必经之路。爱奇艺大数据团队自2014年开始引入Kafka、Storm、Spark Streaming等实时化技术，2017年引入Apache Flink实时计算框架，逐步建设了一套打通数据采集、加工、分发、分析、应用等完整数据流程的实时大数据体系。这套实时大数据体系支持了峰值超过3000万QPS的实时数据处理，支持了如春晚直播、青春有你、尖叫之夜等大型活动的实时计算需求。</p>",
			"techEffect":"<p>本文将介绍爱奇艺实时大数据体系的主要架构、平台功能以及发展过程中的一些思考。未来展望随着公司业务的发展，实时大数据的需求场景逐渐多样化，爱奇艺实时大数据体系会朝着以下几个方向继续迭代：</p><p>1、流批一体：在存储和计算两个方向上探索流批一体的应用场景，逐渐替代传统MapReduce/Spark离线任务的数仓构建，围绕Flink引擎构建流批一体的数仓体系。</p><p>2、湖仓一体：打通实时流灌入数据湖（Iceberg）的数据通路，依托实时更新的数据湖体系，支持更多更丰富的OLAP业务场景</p><p>3、ETL-&gt;ELT：引导实时数仓的架构变迁，将实时数据构建环节中的部分计算转移到实时数仓下游的OLAP体系和数据湖中，依托OLAP引擎的强大性能来满足用户的过滤/聚合等需求，将实时数仓的链路做短，提升实时数据的质量和稳定性、降低延迟。</p><p>4、BI+AI：打通实时数据生产-&gt;实时特征生产-&gt;在线模型训练-&gt;线上推理的链路，方便用户一站式的实现从数据准备到AI算法模型训练的相关工作。实时化一定是大数据未来最重要的方向之一。爱奇艺大数据团队会沿着上述这些方向继续探索和发展，通过技术创新去支持和孵化更多落地的业务场景，继续推动爱奇艺的数据和产品向着实时化的方向发展。 </p>",
		},
    {cid:"6",
			"name": "网易云",
      logo:require("../assets/logo/wangyiyun.jpg"),
      link:"https://music.163.com",
      firstbrief:"一款歌曲非常齐全的线上听歌软件。网易云音乐网页版上为每位用户收录了海量的音乐曲目，当下最热门、最流行的歌曲在这里统统都能找到，一次性满足你所有的听歌需求。",
			"brief": "<p><strong>网易云音乐</strong>（英文：NetEase CloudMusic）是一款由网易开发的音乐产品，于2021年12月2日在香港联交所主板挂牌上市，是网易杭州研究院的成果，依托专业音乐人、DJ、好友推荐及社交功能，在线音乐服务主打歌单、社交、大牌推荐和音乐指纹，以歌单、DJ节目、社交、地理位置为核心要素，主打发现和分享。</p><p>产品已包括iPhone、Android、Web、Windows、iPad、WP8、Mac、Win10UWP、Linux等九大平台客户端。</p>",
			businessIntro: "&nbsp;</h2><p>&nbsp; &nbsp; &nbsp; “个性化推荐”、“私人FM”，根据用户习惯自动匹配；</p><p>&nbsp;320K 音质享受；</p><p>&nbsp;国内首个以“歌单”作为核心架构的音乐APP，国内最大、最优质的“歌单”库，批量遇见好听音乐更加简单；</p><p>轻松创建“歌单”。“乐评”氛围，同一首歌，通过其他人的评论，体会当中故事、体会同样的感受，在评论中找到共鸣。</p><p>&nbsp;用户自上传“主播电台”，音乐故事、脱口秀、情感话题，每个人都能轻松表达自己。&nbsp;</p><p>明星、专业音乐人、DJ进驻，专业的私房“歌单”和音乐推荐，格调顿现；专业音乐编辑每周新奇独到的专题评论，听歌也可更有趣。</p>",
			"technology": "<p>每年的新年伊始，就被网易的年终听歌报告H5刷了屏，其实网易并不是报告的创始人，但它却又一次点燃了朋友圈。从报告关注的点，你听了多少歌，花了多少时间，哪首歌听得最多，最喜欢的歌手又是谁，哪天又熬夜了，无疑是对用户心理需求的又一次洞察。 </p><p>有人说，这些大数据记录的音乐风格喜好感觉比我自己还了解自己，也有人说，这样的大数据根本不准，“感觉只记录了上半年，没有记录下半年“。</p><p>在网易H5又一次刷屏的背后，我们不难看到大数据分析带来的巨大营销价值，数据驱动营销策略，营销打动更多用户，网易的用户增长数据是最有力的证明。&nbsp;</p><p>网易云音乐诞生的时间并不长，但是在很短的时间内能积累8亿用户，APP活跃用户数跃居音乐类APP前三，这离不开网易云音乐一次次线上线下的营销刷屏。但刷屏的背后，正是它通过大数据对音乐市场的用户洞察。&nbsp;</p><p>许多人被收割是因为网易的别致的日推，大概也是国内首次尝试用大数据做个性化推荐的音乐软件。在日推的上方，有这样一句话“根据你的音乐口味生成，每天6:00更新”，听日推，你可能会问，“它怎么知道我喜欢什么样的歌？”&nbsp;</p><p>除了实现音乐个性化推荐，对大数据的分析也能帮助营销人员洞察把握用户的情绪。2亿用户，每天产生若干评论点赞，而这些数据的汇集就是这群人每天的心理描写。透过数据分析，网易云音乐即时抓住用户心理需求，因此一次又一次做出刷屏的营销活动。</p>",
			"techEffect": "<p>其实，早在2016年，网易云音乐就发布了《听歌多元化时代到来——网易云音乐2016上半年用户行为大数据》报告。根据网易云音乐大数据分析，2016年上半年音乐市场和用户听歌行为呈现出了以下十大现象和趋势：</p><p><ul><li>听歌进入社交化时代，听歌单、听歌看评论成为流行听歌行为；<li>个性化推荐已覆盖多数听歌用户，越来越多用户通过个性化推荐发现好音乐；<li>独立音乐人迅速崛起，社交互动助推音乐人涨粉；<li>90后已成为音乐消费主力人群； <li>用户付费意识明显提高，付费会员数和数字专辑售卖增长迅猛；<li>综艺影视对音乐的影响依旧强大，热门歌曲中7成来源于综艺或影视； <li>听歌进入多元化时代，民谣、电音、二次元音乐崛起； <li>偶像流行乐保持高热度，欧美歌曲受众提升；<li>音乐市场正在构建一种新的评价体系，评论数成为歌曲热度重要评价指标；<li>男歌手受喜爱度高于女歌手，女性歌迷消费群体经济崛起；</ul></p><p>在这份简易的数据分析的驱动之下，网易云音乐在2017年的营销可谓上天入地，最多刷屏的当然是“地铁乐评”展、与农夫三泉的跨界营销。</p><p>用户年龄以及他们的喜好关注消费能力都一一在这份数据分析里呈现，网易云音乐再运用自己擅长的情怀+讲故事的营销手段，2018年的开端，他们就做出了刷屏的活动。 随着大数据人工智能越来越热，由大数据驱动更多的营销策略在2018年将越来越多，毕竟你不了解用户就不知道让用户看到什么，而相比传统的问卷调查，甚至用户访谈来获取用户需求，大数据其实更准确一点，因为大数据不会骗人。</p><p>越来越多的公司会通过自己或者第三方建立自己的数据库，由此驱动营销决策。关注微信公众号cn99click,免费获取大数据监测软件，网站、APP、微信等大数据全面掌握，自动生成用户行为轨迹分析，帮助企业找到更多用户，并提升用户留存和转化。</p>",
		}
  
  ],mainDatalight:[
    
    {
      cid: "1",
      name: "今日头条",
      link:"https://www.toutiao.com",
      logo: require("../assets/logo/jinritoutiao.jpg"),
      videoSrc: require("../assets/video/jinritoutiao.mp4")
      
    },
    {
      cid: "2",
      name:"哔哩哔哩",
      logo: require("../assets/logo/bilibili.jpg"),
      videoSrc: require("../assets/video/bilibili.mp4"),
     link:"https://www.bilibili.com"
    },
    {cid:"3",
			"name":"优酷",
      logo: require("../assets/logo/youku.jpg"),
      videoSrc: require("../assets/video/youku.mp4"),
      link:"https://www.youku.com"
      },
    { cid:"4",
			"name":"抖音",
      logo: require("../assets/logo/douyin.jpg"),
      videoSrc: require("../assets/video/douyin.mp4"),
      link:"http://www.douyin.com"
      },
    {cid:"5",

			"name":"爱奇艺",
      logo: require("../assets/logo/aiqiyi.jpg"),
      videoSrc: require("../assets/video/aiqiyi.mp4"),
      link:"https://iqiyi.com"
      	},
    {cid:"6",
			"name": "网易云",
      logo:require("../assets/logo/wangyiyun.jpg"),
      videoSrc: require("../assets/video/wangyiyun.mp4"),
      link:"https://music.163.com"
      }
  
  ]

}
const actions={
  setLoading: ({commit}, v) => {
    commit('SET_LOADING', v);
},
}
const mutations={
  SET_LOADING: (state, v) => {
    state.loading = v;
},
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})
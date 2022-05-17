/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/05/07/MySQL/20210630201735.png","3d294e8534bfadb56eb7af5164cd5907"],["/2021/05/07/MySQL/20210630201859.png","b38d3610c7a3d44387eef57509c58f16"],["/2021/05/07/MySQL/20210630210116.png","7f6cfd93ca50b53c4d35d87d32c725dc"],["/2021/05/07/MySQL/20210630210456.png","adbdcbba0a24f404dc5d84ead58d3a53"],["/2021/05/07/MySQL/20210630223758.png","21b48f32cf19fdf8ddd4addc60947aba"],["/2021/05/07/MySQL/20210630223819.png","abd10c8e83f9da182990719a0bea4c04"],["/2021/05/07/MySQL/20210630223829.png","7f2c0167c8abdc8b7cc9bb01888ad982"],["/2021/05/07/MySQL/20210630224323.png","11b5142b43bb1c7381e42e1290700ed8"],["/2021/05/07/MySQL/20210630224430.png","3fdf022c8498a33005d2162ca17cdd0c"],["/2021/05/07/MySQL/20210630224453.png","96cd753304117c4520358d6fe96c11c2"],["/2021/05/07/MySQL/20210630224611.png","a91e701f2ff038fc87571acda22cfe38"],["/2021/05/07/MySQL/20210701085258.png","26b5be6b6154a770f6a109939c8ca752"],["/2021/05/07/MySQL/20210701105406.png","721e95c072ba9778ba85d04cfdd24291"],["/2021/05/07/MySQL/20210701111051.png","5a635eff889baf13a382f0b5eb808cf9"],["/2021/05/07/MySQL/20210701112307.png","b9fec6bc8b6cc7f352401ba9ae346be2"],["/2021/05/07/MySQL/20210701112344.png","9ebb8941a6eeb48e62f80d7ffd50a54a"],["/2021/05/07/MySQL/20210701113031.png","d3478fdac620182941234df599de7fae"],["/2021/05/07/MySQL/20210701142452.png","0cb12116db62aca1c95c497992e5ea0f"],["/2021/05/07/MySQL/20210701142510.png","1e592302a83a5cf25954c8e3665b9610"],["/2021/05/07/MySQL/20210701143713.png","3ac3148d3f2748deae108f95a834f7b2"],["/2021/05/07/MySQL/20210701143726.png","0db26d8627f139d8ad2bd9cc8690fe71"],["/2021/05/07/MySQL/20210701143737.png","b79f30ef1ba2dafc6b0b59dd584fbfe5"],["/2021/05/07/MySQL/20210701143749.png","d31b0d4f26bca210b707752ed3293f1e"],["/2021/05/07/MySQL/20210701163643.png","29d1d1bd45d0a69a896c874ad9ff0414"],["/2021/05/07/MySQL/20210701170246.png","d5f1cbe976cd6e45a135ede1afce9142"],["/2021/05/07/MySQL/20210701170831.png","47a9ee71614554b439f2ca5972d4f4ab"],["/2021/05/07/MySQL/20210701171121.png","addebea78ffeb043ee7081338360c946"],["/2021/05/07/MySQL/20210701184545.png","492bf0eef4da500a43d02c9cdb145fd0"],["/2021/05/07/MySQL/20210702094750.png","1ed39736cb559bb1587ca14a1744747e"],["/2021/05/07/MySQL/20210703110321.png","ff3a71912e050f1c20101a0d84a1c7f8"],["/2021/05/07/MySQL/20210703111005.png","14d2b2b5977798153c7836197b81470b"],["/2021/05/07/MySQL/20210703111018.png","28850020a98415d92f99f7e4f8141562"],["/2021/05/07/MySQL/20210703111036.png","02a30ceee6ad486f08dfe21386dcfc0c"],["/2021/05/07/MySQL/20210703142738.png","10c228a0a81ee33a2395340da071ae48"],["/2021/05/07/MySQL/20210703152258.png","a03cee9616d0b34f147c045cf77f27da"],["/2021/05/07/MySQL/20210703152314.png","3a82e2ac7bc5516da464bef48a63b088"],["/2021/05/07/MySQL/20210703152514.png","8ee0d554f6c3bfbfb1b7106714124164"],["/2021/05/07/MySQL/20210703152552.png","db679eea8fc2f8eaecb86e7bed21eac0"],["/2021/05/07/MySQL/20210703152939.png","1e366bf032c1a4b3272461ccb289eeaf"],["/2021/05/07/MySQL/20210703161609.png","32eda835df44a52b8a2260b620be240e"],["/2021/05/07/MySQL/20210703161731.png","e4c0e8d4b75408bb51101b13790ed5ea"],["/2021/05/07/MySQL/20210703162005.png","ee19d696408212586607eb706d004aaf"],["/2021/05/07/MySQL/20210703171452.png","5fb6f336e1f50e8952a588407f131080"],["/2021/05/07/MySQL/20210703191518.png","fb17a8045d0a88c67445399a871738ca"],["/2021/05/07/MySQL/index.html","b82a109e9983d9cc50afb4ad7024359b"],["/2021/06/07/JDBC/20210704112049.png","c2731386e07515ead0db97464438fb5a"],["/2021/06/07/JDBC/20210704112134.png","b20e5147d1c632d1d442512e3fc10e7a"],["/2021/06/07/JDBC/20210704123012.png","2fc73b665b3a75c15d0c9e79004e7506"],["/2021/06/07/JDBC/20210704145529.png","d70a46978d7856eca534b94a82aa6e3a"],["/2021/06/07/JDBC/20210704145550.png","e52b69c5f285f0497c98c6c3e7fb071e"],["/2021/06/07/JDBC/20210704150456.png","7d1e7e7e52f837d5a772e8bd917965b9"],["/2021/06/07/JDBC/20210704153100.png","7635b2cd36514c5a78990e0b151313bf"],["/2021/06/07/JDBC/20210705111903.png","7635b2cd36514c5a78990e0b151313bf"],["/2021/06/07/JDBC/20210705182201.png","b7673ac8518440564808fcd60b0cdc54"],["/2021/06/07/JDBC/20210706143739.png","65f7473d743cefd8cf1220443dac4c68"],["/2021/06/07/JDBC/20210706143810.png","ee7d2cf9a27c3ed1e072ac49146d0acb"],["/2021/06/07/JDBC/20210706152659.png","bc4f2df9019f45c3ca250f1831140245"],["/2021/06/07/JDBC/20210707200554.png","e76989eeb1d60e85130ab73c15d30ab6"],["/2021/06/07/JDBC/20210709153202.png","614831adecfe2fa07c4ebada1bcc53df"],["/2021/06/07/JDBC/20210711103201.png","2ab614f418d41d528caa94ae9b737368"],["/2021/06/07/JDBC/20210711185528.png","f5acab40a2f9c7628ce7f66f5997b267"],["/2021/06/07/JDBC/20210711190848.png","d660ab585bea4e4c1cd10d858c629340"],["/2021/06/07/JDBC/20210711190953.png","f46769e0d6557edb5b6d8d9204d72036"],["/2021/06/07/JDBC/20210711191448.png","8df8dd96d7fc23166892e4a30365a379"],["/2021/06/07/JDBC/20210711192110.png","b4f8a83ee9ea52f38df70a5be251e758"],["/2021/06/07/JDBC/20210711192336.png","f6bf9abd78230f525f8c8f10076af27e"],["/2021/06/07/JDBC/20210711192550.png","dd422e586cbee3ae2dfb080725fb50bc"],["/2021/06/07/JDBC/20210711193523.png","d684b7b54c0349217dcdcd1f4122101c"],["/2021/06/07/JDBC/20210711193622.png","eb444e2425c4c2f91114cd9eddc34c8b"],["/2021/06/07/JDBC/20210712101026.png","0532f0a6cdac4cb6bd2337fcc747501d"],["/2021/06/07/JDBC/20210712110521.png","ae3f0f2a2d04338fb2a0e6d0fb066a4c"],["/2021/06/07/JDBC/20210712120555.png","acde882f76a20ad862c337f86064c418"],["/2021/06/07/JDBC/20210712120643.png","2f1856473c8da87b9926543d81445038"],["/2021/06/07/JDBC/20210712122737.png","dbd337dc88b287d9789f245582ab9d99"],["/2021/06/07/JDBC/20210712123200.png","aeb8e90814e96c548d92d9293554ad40"],["/2021/06/07/JDBC/20210712124134.png","e2cb7e4a638854af83be39c3347ef934"],["/2021/06/07/JDBC/20210712124306.png","1b6335c7d8d954600c7263b1a7888ed9"],["/2021/06/07/JDBC/20210712124525.png","b771af1e423cc128feafe237a02c1c3c"],["/2021/06/07/JDBC/20210712124734.png","49d1bc150e97f5112e892147cbf746af"],["/2021/06/07/JDBC/20210712125136.png","df0a941b7f440ad259a01b1f3e13b10d"],["/2021/06/07/JDBC/20210712153312.png","226116e6c4930f99a1cb07492e8a2c4a"],["/2021/06/07/JDBC/20210712153317.png","1d13b5d1b5b3bc22c02d95e61b90b3d2"],["/2021/06/07/JDBC/20210712153325.png","2c63db8c523dee695def5cb3b1e6c923"],["/2021/06/07/JDBC/20210712153328.png","2b81bcad6afa5eb1d58ec4526e51874a"],["/2021/06/07/JDBC/20210712153331.png","13fe9b105a29eb6328965099f310e6c0"],["/2021/06/07/JDBC/20210712153333.png","0788c2e22d5ceb04f7357ca3dee2c1f7"],["/2021/06/07/JDBC/20210712153335.png","6d3817478dc8611e18d5a90751a77b55"],["/2021/06/07/JDBC/20210712153337.png","02ccfe7a309a0e8c39789fac7c3260c7"],["/2021/06/07/JDBC/20210712154207.png","4519180a9fc869e7041461de09c65b64"],["/2021/06/07/JDBC/index.html","6cf74db016ea9b5a660c6f62f26f26a2"],["/2021/06/13/HTML/20210713191848.png","cb16f20b332111087e4eb86c7acb6df9"],["/2021/06/13/HTML/20210713192135.png","c490afc085d443432caa635e1e08c3b7"],["/2021/06/13/HTML/20210713192218.png","9dfc5d41928ca5115c1dcc1cf0fff4ca"],["/2021/06/13/HTML/20210713203134.png","74095b261a29eba1e0810b1c8ee7b694"],["/2021/06/13/HTML/20210713211204.png","0434a02bac246156c4ac33b3852f7185"],["/2021/06/13/HTML/20210713211612.png","2a776c5a1631596e3a63f66d2b05f27f"],["/2021/06/13/HTML/20210714093952.png","e7dbe2d8fccc94e844b18e8c50a18de2"],["/2021/06/13/HTML/20210714194418.png","fe5ce1d0c37b9cbd7167d23248ca790a"],["/2021/06/13/HTML/20210714194452.png","77ff32147394214844b4bc6325d0ba2a"],["/2021/06/13/HTML/20210714194743.png","e4ac0bded7a263e21716d47a041e5210"],["/2021/06/13/HTML/20210714195057.png","7d5a0ef8b86fb9eaf5d751f6f46ff73e"],["/2021/06/13/HTML/20210714195641.png","632d33fd537fa4af92c22e93fa325559"],["/2021/06/13/HTML/20210714202249.png","a3199d82e8f3eb3ce941a89d5caefe5c"],["/2021/06/13/HTML/20210714202438.png","057ba89e6b8cdac05e0c8668c359a2d7"],["/2021/06/13/HTML/20210714211104.png","2f8606fad1866a5ecb19a660ffce8efa"],["/2021/06/13/HTML/20210714211148.png","7d1dbbd20416210276bf94b5a03de804"],["/2021/06/13/HTML/20210714211226.png","795f92771730bc21077183e7bc630729"],["/2021/06/13/HTML/image-20220512231440829.png","b72b68cd520d401bfe80097a8e59f3f9"],["/2021/06/13/HTML/index.html","7c93e89ee7e669dbd9fbfdfc1045f53a"],["/2021/06/15/CSS/20210715095520.png","1866c053dcfa3245bd1cb0c2236fc4b6"],["/2021/06/15/CSS/20210715160407.png","65cb744a311dd763009158cc6836fe9d"],["/2021/06/15/CSS/20210715160452.png","1d7b34fda9bf4cb5c1f31385a95d207a"],["/2021/06/15/CSS/20210715174100.png","5cc85f6534cade486d8685d65360ced7"],["/2021/06/15/CSS/20210715174209.png","4d76e1e39a65e2d4fd122a9b5f717599"],["/2021/06/15/CSS/20210718100331.png","2500ac5759253ad6cd766d9a3f56d5ef"],["/2021/06/15/CSS/20210718102727.png","ce63a4963a0536653b98ebcf0cdbf77d"],["/2021/06/15/CSS/20210718103223.png","683fe954417d7a0cf27c2e65e3367c92"],["/2021/06/15/CSS/20210718103413.png","cc232fa8f8cb19ffb6d201af1f7180df"],["/2021/06/15/CSS/20210718103540.png","993661ba03ac3d2603b492726b3d14ec"],["/2021/06/15/CSS/20210718104648.png","df0b1c7da6d4a0c7caa1ee9aa4bbd17e"],["/2021/06/15/CSS/20210718104836.png","ed8bf00a406d9fc4bffef7d957e76c06"],["/2021/06/15/CSS/20210718105023.png","2043acc5b1adf9edd736372e5147e886"],["/2021/06/15/CSS/20210718105102.png","6f88bc5287d70846f2eca592f2c16c30"],["/2021/06/15/CSS/20210718105114.png","a7764a77861234c93f381a54b333277d"],["/2021/06/15/CSS/20210718105205.png","2e9e81dd8ab7fbd64fc2dabb863742fd"],["/2021/06/15/CSS/20210718105219.png","da44df495ff9c5561fe2acf0a784911f"],["/2021/06/15/CSS/20210718163447.png","8c48edcc652789a54440e72d821016d2"],["/2021/06/15/CSS/20210718163814.png","291173a50332131b71e244ca5419867a"],["/2021/06/15/CSS/20210718190406.png","7a42ef4592d0c6fb9a3c372b81461ee2"],["/2021/06/15/CSS/20210718190434.png","e2ca18e078539af264542805216c098e"],["/2021/06/15/CSS/20210718194809.png","2b06dce19752deeffb5c414fa68cc23b"],["/2021/06/15/CSS/20210718200438.png","760853e8db7c89554405d3800748a577"],["/2021/06/15/CSS/20210719085925.png","7cc4054cc1bec21fef76435c105696fe"],["/2021/06/15/CSS/index.html","80ee0e3498fac2bd3b0d8abd921fec49"],["/2021/06/16/JS/20210719173226.png","6dff368d8085e83fc57a79ae18730e00"],["/2021/06/16/JS/20210719202759.png","cde18264f5ef4520529737b11e40eb9b"],["/2021/06/16/JS/20210719203014.png","a8b46712b20174f9a4f38d4686b336a5"],["/2021/06/16/JS/20210720090920.png","169222e9e0005896c855be451a99eea2"],["/2021/06/16/JS/20210720091128.png","87eecabbeb06061849d80e8ffecafbbd"],["/2021/06/16/JS/20210720091607.png","3c04da4da16257ca6c0e7ce175fe4528"],["/2021/06/16/JS/20210720091849.png","d637c7e2dc64e425562947e468164e6c"],["/2021/06/16/JS/20210720092116.png","5c444477c429ba9766f07a039e0a2fa2"],["/2021/06/16/JS/20210720092352.png","123597a3aeeeb212b83e4df92fed29b6"],["/2021/06/16/JS/20210720092610.png","0b1f894cc347b1897522dd24eb96381d"],["/2021/06/16/JS/20210720092807.png","ff58520e5d9ad00cccd6f57ad35ec7f3"],["/2021/06/16/JS/20210720093003.png","3397c028f2abf162c9ccf3e7b2f57329"],["/2021/06/16/JS/20210720093244.png","1af9f49ebd7c18cd09afd0b86c814005"],["/2021/06/16/JS/20210720094411.png","97fafeb1bb0470aa87fe2103ffe04dbb"],["/2021/06/16/JS/20210724163037.png","614b615862b3375acaa6092f860127ee"],["/2021/06/16/JS/20210724163150.png","ae30bda412990bed74d5326b3795894f"],["/2021/06/16/JS/20210724163235.png","8bb4d601fc5c91b75c3e2a8797fb7fc2"],["/2021/06/16/JS/20210724165033.png","f7e4512f0e60b1c18b81c700b232aa6f"],["/2021/06/16/JS/20210724165806.png","16083c5804541f19271a9238fc67a7cc"],["/2021/06/16/JS/20210724171327.png","f79634fd9a813cb9dbfd868fa1b43a6b"],["/2021/06/16/JS/20210725090203.png","6efa28710d88f7a9224514530180e7ba"],["/2021/06/16/JS/20210725091429.png","b6fb7d7eab0c37f6ab529befdc38b406"],["/2021/06/16/JS/20210725091516.png","f218ec2a9031dc829a7a1fe9651c7409"],["/2021/06/16/JS/20210725094240.png","c36935981370ed8916a11181f4f58c3a"],["/2021/06/16/JS/20210725103304.png","b5cf0053f5bf3568f0c4b3e014017e91"],["/2021/06/16/JS/20210725104108.png","daa3ba1b8231291555063396f51a9a86"],["/2021/06/16/JS/20210725153638.png","487832d547171731423d4eece684fbf0"],["/2021/06/16/JS/20210725161823.png","794c7d8262bb36a101a1a253d4787af7"],["/2021/06/16/JS/20210725170256.png","e6f656020f29d1cf77ad505735dc0c4e"],["/2021/06/16/JS/20210725170443.png","2ae104663a98f406a74718a76e01f60f"],["/2021/06/16/JS/20210725200123.png","40934aac2bd75303296a2ad3a31d3735"],["/2021/06/16/JS/20210725201436.png","a7e09122c68462045b3ceb53a268305c"],["/2021/06/16/JS/20210726103714.png","4772b148903b64e946ce1dd10d82303e"],["/2021/06/16/JS/20210726103848.png","eecc586a19d61da5e5041e75601538de"],["/2021/06/16/JS/20210726141452.png","47e03f2b67caefdcbb3abd3ab92464de"],["/2021/06/16/JS/20210726141503.png","43b181c2bbef79baaf438ef35a922736"],["/2021/06/16/JS/20210726141526.png","e825c8239380ca966146d377fb0dcfe1"],["/2021/06/16/JS/20210726152748.png","17a0615dd9bebaf5b8f74cdef1a30ad8"],["/2021/06/16/JS/20210727201506.png","86befe0a85b1bcd4dcb2bed0322081ce"],["/2021/06/16/JS/index.html","791b9cb975a45fa6c262535b4db9dc57"],["/2021/06/18/JQuery/20210731144759.gif","40fd1151bdad7ddabb9e318f21c287ca"],["/2021/06/18/JQuery/20210731151417.png","03e3bd00a14b9f73cd89f83fcda10377"],["/2021/06/18/JQuery/20210731151725.png","9dcc068bc4c5f7a1104b4c896acacc94"],["/2021/06/18/JQuery/20210731153222.png","0617cca55699bf07aa3822b0ced84b6f"],["/2021/06/18/JQuery/20210731153418.png","5ee60df80859902838e6a27ccc3a2ca5"],["/2021/06/18/JQuery/20210731153456.png","dd714d61785467eb1fef9a4697991037"],["/2021/06/18/JQuery/index.html","7109036966f7ba53291983210fc89b14"],["/2021/07/20/JavaEE/20210731155304-20220507093630276.png","2aa50fc1854c06c87e0e7317e0973f33"],["/2021/07/20/JavaEE/20210802110328-20220507093630140.png","06397807fd03fb94ae90c5a889c3772f"],["/2021/07/20/JavaEE/20210802110337-20220507093630336.png","61fad09b55a6f96a8b8e54b65a353f56"],["/2021/07/20/JavaEE/20210802204053-20220507093630091.png","8d4bca5f829bea8d52d3bce1bbd6c18a"],["/2021/07/20/JavaEE/20210802204157-20220507093630043.png","aade11cf4ffa1fe6bc6679ea7b9591df"],["/2021/07/20/JavaEE/20210802205500-20220507093630287.png","5e0d714e98def30f920aa2b4c64d789b"],["/2021/07/20/JavaEE/20210802205532-20220507093629703.png","215ca196a849a7dec4264bdc4879871d"],["/2021/07/20/JavaEE/20210802205558-20220507093630506.png","8485178e159ea2d03f2d3f10dcd375ad"],["/2021/07/20/JavaEE/20210802205836-20220507093630044.png","8d63b85c38a3dc925d892faaa88ceba2"],["/2021/07/20/JavaEE/20210802210210-20220507093630228.png","c58d55d24d29973ff0362193b1a93b87"],["/2021/07/20/JavaEE/20210802210437-20220507093630239.png","a5f97ae7d18dd67093ff2f5288288558"],["/2021/07/20/JavaEE/20210802210446-20220507093630225.png","c7e4abca075646f3331562166ee58884"],["/2021/07/20/JavaEE/20210802210812-20220507093630614.png","0361f29c5c5f2b0f4b4dac0bd9016a6c"],["/2021/07/20/JavaEE/20210802211209-20220507093630776.png","efa3175d820b521f3f8dee0e30c0aaf3"],["/2021/07/20/JavaEE/20210803102738-20220507093630489.png","f6fbf7d59dd69e176a8c506f58083508"],["/2021/07/20/JavaEE/20210803102814-20220507093630541.png","f89f8c504ea67a5ee59256f7409a30ea"],["/2021/07/20/JavaEE/20210803161928-20220507093630572.png","e252469dcb294e2d12f6e774ad6993de"],["/2021/07/20/JavaEE/20210803161950-20220507093630931.png","fe398eeb20368277c9f3a544399f39c1"],["/2021/07/20/JavaEE/20210803162052-20220507093630775.png","4e832e42a9da1d608591f8bbedc19b35"],["/2021/07/20/JavaEE/20210803205411-20220507093631302.png","21e3938be3530895643abffb4069b2e5"],["/2021/07/20/JavaEE/20210803205435-20220507093630830.png","a6a016472d302ad02bcea2909b2679f2"],["/2021/07/20/JavaEE/20210804094215-20220507093631574.png","e8fb1f0af7129c34a1589b2d623e105e"],["/2021/07/20/JavaEE/20210804112525-20220507093631140.png","154e04b4270d7c1b4040f128ac3b056a"],["/2021/07/20/JavaEE/20210804163548-20220507093631188.png","568567b13a5b4d0af7ce45fcb7099e43"],["/2021/07/20/JavaEE/20210804165930-20220507093631487.png","1dff5c9c074e3043cbea8a7b5fd2ea6a"],["/2021/07/20/JavaEE/20210804171205-20220507093631361.png","190b5ab71c746ee8f9d9259332433613"],["/2021/07/20/JavaEE/20210804210749-20220507093631233.png","259a9ec6b4b50953410f76b8055a0626"],["/2021/07/20/JavaEE/20210805102003-20220507093631748.png","ba3e220fa205a02ba73b57586584ca0a"],["/2021/07/20/JavaEE/20210805102039-20220507093631952.png","b91a4d91b1d99ef32dd50f35546a5c57"],["/2021/07/20/JavaEE/20210805142941-20220507093631639.png","f8dbbca425f945866ba46010fa804ac9"],["/2021/07/20/JavaEE/20210807110128-20220507093631490.png","e12c45bcce605086c6bd7541cfa63679"],["/2021/07/20/JavaEE/20210808090141-20220507093631591.png","c21f8b443d9f1192e746a00b832e416f"],["/2021/07/20/JavaEE/20210808154352-20220507093631697.png","ec88d24c600ce858b1b39c5345cf31b8"],["/2021/07/20/JavaEE/20210808161851-20220507093632140.png","a1efe858211e026f252569acd328ceb4"],["/2021/07/20/JavaEE/20210808161855-20220507093631903.png","05ead589355ce6ab3e4b353c6446a476"],["/2021/07/20/JavaEE/index.html","e955862b3188fc04b7117bb8e6cd6bc4"],["/2021/07/21/Linux学习/20210810165254.png","daf66419bd47119a72cecb1931718946"],["/2021/07/21/Linux学习/20210810165902.png","7d420002370b8a1a67bcca29be80b952"],["/2021/07/21/Linux学习/index.html","e27625486bee97d666030c47a30933bd"],["/2021/08/13/git/20210716160327.png","bad82d2f02ef9c312a3e6c8d41e9ef0a"],["/2021/08/13/git/20210716160355.png","0d29cb752964c92af8d2381ff73f24af"],["/2021/08/13/git/20210716160820.png","54a0ca38558ca126d5e680ce2bb97ae5"],["/2021/08/13/git/20210716162158.png","4b4c9a7272b401cd8b8fb307a037dc39"],["/2021/08/13/git/20210716162242.png","39b6dd27c093be5df6a0524feecb0df6"],["/2021/08/13/git/20210716162745.png","11561b6913bbfb86ee76a560f9115088"],["/2021/08/13/git/20210716163201.png","bff95209aa017f009d9efcf6591e5eef"],["/2021/08/13/git/20210716163336.png","ab4252c42ef7a52a164ec25561ee6187"],["/2021/08/13/git/20210716163613.png","a436ad07a51081d1e881584fcec2b1fd"],["/2021/08/13/git/20210716163744.png","1377c772c6be813ee9a9772b1541f987"],["/2021/08/13/git/20210716163903.png","ce1584368df8fc658f949f058d06da4d"],["/2021/08/13/git/20210716164259.png","16e688b7d06f16334187747e58e10e83"],["/2021/08/13/git/20210716164315.png","2756343e311e5c08f1c1935640d7aa21"],["/2021/08/13/git/20210716165022.png","9e6eee8041f1222f9ce64c81adca787f"],["/2021/08/13/git/20210716165040.png","baf0a9712cf3e1014f6e9f5ede67290c"],["/2021/08/13/git/20210716165148.png","a09c3a894515508d1dae031f9cf839c6"],["/2021/08/13/git/20210716165501.png","b422703a2f79f95835f843377458447e"],["/2021/08/13/git/20210716172535.png","366c36c8447e1dd61a8865061bc79869"],["/2021/08/13/git/20210716173722.png","c0190ac510d4cb5f598a42af59eef4a1"],["/2021/08/13/git/20210716173804.png","c494591e014b3377b6557053acab42d0"],["/2021/08/13/git/20210716190012.png","b9e25d7386f20289dd5f051337ce11b7"],["/2021/08/13/git/20210716190039.png","d4ab779a459f48337dcbcf940b08ea42"],["/2021/08/13/git/20210716190052.png","21e8cbf84d869d8072b7a5673afd63c2"],["/2021/08/13/git/20210716191040.png","452984bc331793e14a228393ebca0e52"],["/2021/08/13/git/20210716191249.png","4e5f29df502463d3c76ef311729c1b39"],["/2021/08/13/git/20210716191505.png","e2c4d3a8e57563014906d612d13e1c1a"],["/2021/08/13/git/20210716191516.png","282071ff7b8be54fa5a2c611cf9c3ca8"],["/2021/08/13/git/20210716191540.png","0bb3fc6e92c388afcd0850d764de90ce"],["/2021/08/13/git/20210716191642.png","5c8d9b072faa31c0b299c3a40eb63588"],["/2021/08/13/git/20210716192257.png","ae3b47031aa56b03f0f2b621d2c9d9ae"],["/2021/08/13/git/20210716192305.png","26c228dff5e9c735cf6dfe6e86660664"],["/2021/08/13/git/20210716192331.png","757d104077e209d8c10ca9acd041c933"],["/2021/08/13/git/20210716192952.png","2664e2d7c97d95e1f969af1b91a55941"],["/2021/08/13/git/20210716193047.png","aed58ba10fc80ff17130b8fdf272f6ba"],["/2021/08/13/git/20210716195249.png","2091ca0ac36dcff3c2992aaab8022674"],["/2021/08/13/git/20210716195504.png","b26fd1448b921743efa5eb680081627f"],["/2021/08/13/git/20210716195715.png","21013e181002db35ebe37f0a23c4f3f9"],["/2021/08/13/git/20210716202947.png","f2f4219b8a4d6b98f98e3ef5094d6b89"],["/2021/08/13/git/20210716203057.png","b8f94206e2a9d2eac5a41aef58cb6ad2"],["/2021/08/13/git/20210716203405.png","dcf78d16ca4bb8b5cae94690e1ede405"],["/2021/08/13/git/20210716205522.png","6a9a4e8cbd1b2383f6a6bd96b324b3aa"],["/2021/08/13/git/20210716205639.png","df07a6cf5303f44f1854e0e697c9668c"],["/2021/08/13/git/20210716205742.png","e82e5c1c28690ba5ce48b648f4a6fdf1"],["/2021/08/13/git/20210716210051.png","29909200cb153a585c26d56be877c1ae"],["/2021/08/13/git/20210716210157.png","bbcb2e3b411a346f507ee198a2bbf718"],["/2021/08/13/git/20210716210515.png","c1bd6b475a5911fd2fb1ff98f6d2e8e8"],["/2021/08/13/git/20210716210648.png","2fc05af13d64e277869c8f8d64a4fe8f"],["/2021/08/13/git/20210716211526.png","39dbeab640b65810e4093937c2d6b529"],["/2021/08/13/git/20210716211737.png","eb40718c2f45df02c2e8ab630084bc16"],["/2021/08/13/git/20210716212101.png","4f8a0cb3a1ba40f00ff93f239bd4d065"],["/2021/08/13/git/20210716212214.png","bdbe088a2861a1b274252efe10457759"],["/2021/08/13/git/20210717114246.png","c8d0e715610cd6157490799536263235"],["/2021/08/13/git/20210717114612.png","8040329eaf2b715096e59b9fa616e0d9"],["/2021/08/13/git/20210717114625.png","14b6fb67f1aac8f8fe89e078380ba68c"],["/2021/08/13/git/20210717114728.png","6626f364a04442f5277b739c8228058b"],["/2021/08/13/git/20210717114756.png","d6b6e7145464d1ae337a92ce722e2a31"],["/2021/08/13/git/20210717144958.png","a2fe43affa41a934be4e86ed4ae59365"],["/2021/08/13/git/20210717204402.png","dd6fa3602d4a531d4f3adbc5d4762889"],["/2021/08/13/git/20210717204425.png","e2720efff87756a2810785f23c4bd581"],["/2021/08/13/git/index.html","9e6ad7b46570a7f9f1d5073d77099776"],["/2022/02/09/多线程/06_02.jpg","65cc8f4e929d1167922d640ec074cc7c"],["/2022/02/09/多线程/image-20201109202131975.png","071a523471f8f569ec0ac5a0f33d16d9"],["/2022/02/09/多线程/image-20220304103932619.png","f8cf0ddfd9627b52c0f10e1001ebc883"],["/2022/02/09/多线程/image-20220304231552625.png","5f7310cad9a89d16f6c33f0bcb7c955c"],["/2022/02/09/多线程/image-20220304232258996.png","f6807a5ab8e0d69ba3e9797eb1bd0e7c"],["/2022/02/09/多线程/image-20220304234448327.png","4e7a91d2b4a9d07025316f65d410a23c"],["/2022/02/09/多线程/image-20220307173638132.png","3191da4e00bcf07d051eb7106ad1d94d"],["/2022/02/09/多线程/image-20220308201744929.png","1a25a8c644b6bfea93505e9683d29be3"],["/2022/02/09/多线程/image-20220310175800308.png","3162ad560a4420026070fb44318b7843"],["/2022/02/09/多线程/image-20220313141951366.png","b1239e2e746d8c71f8f047cb255223b9"],["/2022/02/09/多线程/image-20220314162532547.png","9bf7ff8fddbb77ea472937d1d9a06175"],["/2022/02/09/多线程/image-20220314163745382.png","97d3ba99673c13cacc5122d872aeef49"],["/2022/02/09/多线程/index.html","2e50863bb9dbe8f529da3c71aed0c628"],["/2022/02/12/Redis面试题/Redis-03.jpg","1ad0a29f9b237ae399009054bbd42e46"],["/2022/02/12/Redis面试题/image-20220320220341675.png","b05a2d624142515577e56cf1e19bf22d"],["/2022/02/12/Redis面试题/index.html","1598e5efbfa17651d9a768e2f0b2ad3e"],["/2022/02/23/算法高频题总结/25617_oW1zq2BOkhrT7ERQ.png","ab49c641e162d178b7c6f4bf81d579d9"],["/2022/02/23/算法高频题总结/image-20220107164908659.png","956d7d91376c6ea32f3f7aef275d3ffc"],["/2022/02/23/算法高频题总结/image-20220114215749989.png","6ba4af4315c725bb2781672cc4e90ca0"],["/2022/02/23/算法高频题总结/image-20220114215821577.png","7b4449042ac3b0a380b18f9903055e1c"],["/2022/02/23/算法高频题总结/image-20220124114518863.png","df4ef69676e0cd4c17fba2604f96ad89"],["/2022/02/23/算法高频题总结/image-20220124222730796.png","b15adac6933a7da60b000bdd6a9ed1f9"],["/2022/02/23/算法高频题总结/image-20220125165947341.png","501b0d2fef5a64695f72a1b762c6085e"],["/2022/02/23/算法高频题总结/image-20220125205333273.png","ebfdacfe9e7693debf8d0dd852bbc921"],["/2022/02/23/算法高频题总结/image-20220126121822867.png","2a387d0add5f194c9bc81cf0f5d44fbb"],["/2022/02/23/算法高频题总结/image-20220126122746347.png","726d1edf805548dae320b48cae60c960"],["/2022/02/23/算法高频题总结/image-20220126124736980.png","c8d1cf4267c783774fef6b8456878fee"],["/2022/02/23/算法高频题总结/image-20220126140549709.png","857aab1783e10e1d696f9cfbad0d849b"],["/2022/02/23/算法高频题总结/image-20220126141740242.png","8c3a889ee2bede49444be603aa3d07b5"],["/2022/02/23/算法高频题总结/image-20220206111837413.png","3390f5853afe1e10f2371f65a3a2d46b"],["/2022/02/23/算法高频题总结/image-20220207095236631.png","0498e1fbe56a6ceaad6faafdea597d43"],["/2022/02/23/算法高频题总结/image-20220209205752144.png","304e6d61e681d10bb4c4e36092ba38aa"],["/2022/02/23/算法高频题总结/image-20220210103904616.png","7052ed486559168193672d8cc39e8df5"],["/2022/02/23/算法高频题总结/image-20220211103231018.png","2e48dd4bce33f0ced999bdb69eb1e195"],["/2022/02/23/算法高频题总结/image-20220212174938284.png","09006f42b3aab635a8408d25c797ff39"],["/2022/02/23/算法高频题总结/image-20220212174954825.png","357c08b353c423efc5bc9b864a26e3cd"],["/2022/02/23/算法高频题总结/image-20220216171223838.png","ddde77e556de2f0704d36bfb571e2df0"],["/2022/02/23/算法高频题总结/image-20220222171852618.png","78f1c608e952c86dd0e5dfca125d365a"],["/2022/02/23/算法高频题总结/image-20220228230315689.png","cd73cb43dd89526c6ab123567dbff862"],["/2022/02/23/算法高频题总结/image-20220228231209380.png","f22382ebbef39700c1f36471a1c3e730"],["/2022/02/23/算法高频题总结/image-20220228231911847.png","762153d6bbcc300bda4bc059c25ac98d"],["/2022/02/23/算法高频题总结/image-20220508120715738.png","b1cc94c6af91c5c0c796606aa5e087b9"],["/2022/02/23/算法高频题总结/index.html","546c5b68ec9849c72d9c15b13a4250b8"],["/2022/03/10/网络IO面试题/image-20220318122004676.png","59d6f52176898695ab35bba14a2c4724"],["/2022/03/10/网络IO面试题/image-20220318142304657.png","dcf29155b9890b43222462b23fde8254"],["/2022/03/10/网络IO面试题/image-20220318165203569.png","ebb1e43fa3cfdace3f8522d616957b7c"],["/2022/03/10/网络IO面试题/image-20220318165233672.png","235960ab3bfdcaa113044f8a094fc04b"],["/2022/03/10/网络IO面试题/image-20220318165316329.png","19e1102aeeb8a2613a4a67253ebe4b61"],["/2022/03/10/网络IO面试题/index.html","1ee8b5a0906db011abd7f360d306048f"],["/2022/05/06/Hexo-GitHub搭建个人博客2/image-20220504215029708.png","a842e49cbf9b9eaa760efae9d322c820"],["/2022/05/06/Hexo-GitHub搭建个人博客2/image-20220504215421643.png","dbffd6a6905a156812ff6776669ab37c"],["/2022/05/06/Hexo-GitHub搭建个人博客2/image-20220504220404992.png","704274eebeacb9a292ba2626cf9baba5"],["/2022/05/06/Hexo-GitHub搭建个人博客2/image-20220504221105797.png","898e2ed92bb4fbd1b5cdc2a8574a2efe"],["/2022/05/06/Hexo-GitHub搭建个人博客2/image-20220505154551563.png","b4747da3b05e5096e7d35fbfcf315cfe"],["/2022/05/06/Hexo-GitHub搭建个人博客2/image-20220506100715471-20220506102530007.png","a266953dc4b2174e42ecb8ac55d1b844"],["/2022/05/06/Hexo-GitHub搭建个人博客2/image-20220506213244777.png","7665ce5959d581aef623a486924ad38e"],["/2022/05/06/Hexo-GitHub搭建个人博客2/index.html","a70259f691f7fcf3a8d7100be5c64786"],["/2022/05/09/四月面经/image-20220515102055742.png","ed991a60cb1261695c5de64c16c06790"],["/2022/05/09/四月面经/index.html","d4d506a227e5d06b495b5c43680a31e1"],["/2022/05/10/mysql8项目连接出错-端口为0/image-20220510141312668.png","5aa3095b62f8307203af361839824d3f"],["/2022/05/10/mysql8项目连接出错-端口为0/image-20220510141750537.png","1bcaacbd83b442bf896d99b8ae889cc1"],["/2022/05/10/mysql8项目连接出错-端口为0/image-20220510141819985.png","9d2ca6ba99d91d4f773c0038a2f886dd"],["/2022/05/10/mysql8项目连接出错-端口为0/index.html","ee5152908b951e6e0bf2a1835804b319"],["/2022/05/16/分布式笔记/image-20220516101255871.png","31af22dd346cb87e1233a51eb1bb1c4a"],["/2022/05/16/分布式笔记/image-20220516101724270.png","a776c835c58b7dafdbd2fd1b3ac16a68"],["/2022/05/16/分布式笔记/image-20220516101839047.png","710d4d08d03f8b5d0ebe8e32903aef69"],["/2022/05/16/分布式笔记/image-20220516101905531.png","93af569ccc1b2c37bf24631657419d2a"],["/2022/05/16/分布式笔记/index.html","14fe2f69fa32c3028a6f4f3225ea917c"],["/about/index.html","7649547b4eee503670c217b1a8ce1e60"],["/archives/2021/05/index.html","d75fc895a8cdf183d0daefb8884b60bd"],["/archives/2021/06/index.html","4613de1605acfe4481793dedf8ef37ba"],["/archives/2021/07/index.html","7d4dcf0c57bd18f246ea3a0c564d4656"],["/archives/2021/08/index.html","de69cf4aeebebd21be7098a7a711a031"],["/archives/2021/index.html","385c38ba93feb26b2c69107a77d98b64"],["/archives/2022/02/index.html","8c1d92c7a363ca37e84cda9cac61e146"],["/archives/2022/03/index.html","a8978349c3ae7c8907768e41ea62eac1"],["/archives/2022/05/index.html","1e3afc1fddf1c11b4077d26ae19a194a"],["/archives/2022/index.html","e2f9c207d3a82d9a614181891289cb58"],["/archives/index.html","66b5462d98bed4b884e3e2045be10ca7"],["/archives/page/2/index.html","ee666a2adef9453fab67281e53af45c0"],["/categories/hexo/index.html","a8178a2c5c7789ef98001069eb836d6a"],["/categories/index.html","05914bcfbcf59e53de7c6b5d5a6959e9"],["/categories/笔记/index.html","7e1c57b606776ef722e73abb52be08fa"],["/categories/笔记/page/2/index.html","08b94030cb9a19a8d732775bc145beba"],["/categories/笔记/面经/index.html","26324719c907eb60904642e7de308d66"],["/categories/面经/index.html","dbcb6bd70c97e257236ea7c6708d0121"],["/categories/面经/刷题/index.html","76087f477a6db2b45161ab1639aa74d7"],["/categories/面试/index.html","d267a6d15275e0288a61ccde4c17aca9"],["/categories/项目/bug/index.html","3e22a4b7fd4be041c303bd3d1219dd17"],["/categories/项目/index.html","db0b51eedbf65f642e1372ff6380d8ea"],["/css/injector/dark.css","4a68e5609d3336ebb80b636af1db4291"],["/css/injector/light.css","aa29a0429bb78b062b4d4d32372019bf"],["/css/injector/main.css","3fda6ab57cec33bc305dcd4e2408431a"],["/css/main.css","1629c325d244e2efec694fc1fe9992de"],["/css/noscript.css","db00984c4137852611e0883cde2c4034"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/csdn.svg","86051b007cf28766d844108d92c2178e"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/iu.png","9b56dbfb0ebec080db4c3bbcda4ba1a3"],["/images/logo-algolia-nebula-blue-full.svg","d593709631bf6acec3c76b6eb2b4b560"],["/images/logo.svg","f9c1770a959633fdee3a5c53a7e301ee"],["/images/nasa1.jpg","fd9b61832d2c8eced69a4ec3d7b8ef54"],["/images/wechat.jpg","a5ef62cbb0c815e48748e8492ff775a2"],["/index.html","532a1fefe2c55e59bc3edefd85badb1a"],["/js/bookmark.js","f1e6b9739211bcb813a2e9707ac243cf"],["/js/comments-buttons.js","8560bdca22fa8d7f041a2a37efd99de7"],["/js/comments.js","d6996a202a9ad8176a0e39343a974b26"],["/js/config.js","9c844f6ccdb39fdc03e2f53711e2b282"],["/js/injector.js","f60bb9a9703f4fe8134b7111e80e02f2"],["/js/motion.js","7abc3ca6d1524ff02cc435bf8ad4ea05"],["/js/next-boot.js","fdd6d2bafc83312692889c8ce6ee6219"],["/js/pjax.js","63b15d6691cd1af93bca55d221af9c97"],["/js/schedule.js","507e6f1e1632e9bad069753226e09dd4"],["/js/schemes/muse.js","99f7265937ba10b66cdbfb454ecdba04"],["/js/third-party/analytics/baidu-analytics.js","59db45f5e16951a2a1f7b8eccfab736a"],["/js/third-party/analytics/google-analytics.js","ab4c56a299ab145730e51a98410ff266"],["/js/third-party/analytics/growingio.js","c44a6eadf9abf811c289ff7d7747e1a9"],["/js/third-party/chat/chatra.js","603bc9cb6545ddb3ca4d36b2b54337a4"],["/js/third-party/chat/gitter.js","363a2a7a3a47f9af0b4405d484f211b5"],["/js/third-party/chat/tidio.js","f936b8dfee140067fc309dda016eb9b7"],["/js/third-party/comments/changyan.js","f5fbb8a709a43ecacc16b4a0137ac1f2"],["/js/third-party/comments/disqus.js","5679a13a370710ee2784f874864f1c91"],["/js/third-party/comments/disqusjs.js","80915c877fc2801ed14e01e0c80792d0"],["/js/third-party/comments/gitalk.js","74661bde26a34220dc1d5b6e756eddfd"],["/js/third-party/comments/isso.js","d2787e760fd00d3b50cca616b00ea014"],["/js/third-party/comments/livere.js","b9c27e555137cca40c0b2e43b313d132"],["/js/third-party/comments/utterances.js","11c7a9b95aa7bfc55ffcdc2ba54ab0ef"],["/js/third-party/fancybox.js","fe28a65fd2165f4075fcd8a605131317"],["/js/third-party/math/katex.js","2c097169dc8ceb6ca0f1abdb901c49ff"],["/js/third-party/math/mathjax.js","30144af9ee076034740074520e80ecc3"],["/js/third-party/pace.js","4527c8f8b76bdf14e83f7e6ecb620ea1"],["/js/third-party/quicklink.js","9cfc8ba484f5ae03b5902f42c15d623c"],["/js/third-party/rating.js","b61638a7a9ac16ed0ad2b85e6d8613e0"],["/js/third-party/search/algolia-search.js","f2d2b2d53396d15f4e541fea183e9509"],["/js/third-party/search/local-search.js","d2c28f3d0de820d6346ee159082e9d40"],["/js/third-party/statistics/firestore.js","ca1a0531370720a9d32d1b25ec619125"],["/js/third-party/statistics/lean-analytics.js","9917b064415afe7452bc2ccb8b86b7bd"],["/js/third-party/tags/mermaid.js","dea56b0007787c0f0b161cf6ce8571f1"],["/js/third-party/tags/pdf.js","5f1e4126a5c9ebebdb55c94b159b0c07"],["/js/utils.js","d58fcca1944bba8e9eea48d7a913bac2"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","fee96b780d979e5a3e02ce0a119f4917"],["/sw-register.js","ff8398b7f7c1f3a942eb0778c51b9c5b"],["/tags/CSS/index.html","71b74d15116cb252840223f15999db62"],["/tags/DataBase/index.html","11b4bb531abb08d878a7652b809ba5a9"],["/tags/FastDFS/index.html","2270bc453c697c39d55959d494d0cd8d"],["/tags/Git/index.html","e51e4efc01e48ecbbe21a012f2b75797"],["/tags/HTML/index.html","847de21da25beb5fa936644bcda37503"],["/tags/IO/index.html","ee3576b088ffd57249c0b078ec38df27"],["/tags/JDBC/index.html","b87c951e8599b57de9e5d3bd4e5156d4"],["/tags/JQuery/index.html","e1046f2c8b687f5fe09eb31d98aa5176"],["/tags/JS/index.html","79e262dcc9a580b7ab0a08b715244511"],["/tags/Java/index.html","bbc3618a9f1c0e8c017bbf15c677666d"],["/tags/Linux/index.html","ca0fbd23991904e0e9f7dd97ed4d06b9"],["/tags/MySQL/index.html","254c788530ffe14efbe07589f3182282"],["/tags/NoSQL/index.html","8f597137e4bf4f665963f2ca13aed12c"],["/tags/RabbitMQ/index.html","0227e40dc1321af53f9c436aba668249"],["/tags/Redis/index.html","e31b99ca6a91f65417eb1a40ee26ac50"],["/tags/Zookeeper/index.html","265b2cdc5c204a39054fe966c40b0204"],["/tags/hexo/index.html","2b262d3a7a3cdfa98a111ac530756bf6"],["/tags/index.html","2bb8d6ce127db401e00d8b439d026e4e"],["/tags/macos/index.html","ae6b83daf2e74e46cb15358fd71fe09c"],["/tags/web/index.html","602d73e8ce059c9ee45839867e37b285"],["/tags/分布式/index.html","ba8b4c7e17621c1ecdac87dffed02882"],["/tags/前端/index.html","177481c5f28ecc7c05e01cb3c662aac6"],["/tags/后端/index.html","ca46742685d0dcaa1e17f031ca0b7dce"],["/tags/多线程/index.html","05748de9c188cfdd21425501ee9fe0ce"],["/tags/并发编程/index.html","e84b9866b4fd966076c93b341ef1ae50"],["/tags/测试/index.html","a44c1f46cd7cfff47826f72076b2d0cb"],["/tags/算法/index.html","cc1f2d0d892b48aa61af2350f3f05564"],["/tags/网络/index.html","b7d5cefba023bfa5fe8075a768b5010a"],["/tags/踩雷/index.html","2c106f4c33f241d3622e21a797e6217c"],["/tags/面试/index.html","c2d508ec92b9a72f9efe70cab386bef9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
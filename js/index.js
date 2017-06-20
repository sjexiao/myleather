
var navsonArray = new Array('Analytics-Watson Customer-Internet of Things-IT infrastructure-Security-Watson-Social-Industry solutions',
	'Business consulting-Technology services-Financement-Expertise dans les secteurs-industrie-Formation et compétences (US)',
	'information-Outils pour-Plateforme Watson');
var navsonrightArray = new Array('myliAnalytics and data management-myliIndustry solutions-myliEnterprise performance management-myliWatson Analytics-myliCloud data services-myppTransform financial and operational performance-myimimages/sondivr0.jpg-myaaMake faster decisions when you automate your manual processes for planning, budgeting and forecasting',
		'myliOutils pour applications mobiles-myliIBM Blueworks Live-myliIBM Bluemix-myliCloud Managed Services-myppDirecteurs informatiques, obtenez un avantage concurrentiel en utilisant le cloud hybride-myimimages/cloudfc.jpg-myaaétude',
		'myliCognitive BusinessGalerie-myliapplications cognitivesSolutions-myliIBM Marketplace-myppVotre avenir cognitif-myimimages/cognitive.jpg-myaaLisez ce rapport del IBM Institute for Business Value pour savoir comment le cognitive business va changer notre vie et notre façon de travailler',
		'myliAnalyse del-myliexpérience client-myliIBM Marketing Cloud-myliCommerce on Cloud-myppSolution IBM de cartographie du parcours des clients-myimimages/commercefc.png-myaaVisualisez de façon collaborative le parcours de vos clients. Créez et affinez des expériences personnalisées pour des dizaines de segments prioritaires.',
		'myliWatson Internet of Things-myliPlateforme Watson IoT-myliGestion des équipements-myppWatson Internet of Things-myimimages/iotfc.jpg-myaaDécouvrez comment IoT cognitif va transformer notre manière dappréhender le monde physique (US)',
		'myliMobileFirst Foundation-myliAPI Connect-myliIBM Cloudant-myppProduit à la une : Expert seller app with Box-myimimages/platform380.jpg-myaaAccédez à des gammes de produits et de services à jour pour mieux préparer vos réunions avec vos clients et réaliser plus de ventes',
		'myliIBM Power Systems-myliIBM z Systems-myliIBM LinuxONE-myliIBM Storage-myppÉvaluation détat de préparation infrastructure IT-myimimages/itinfrafc.jpg-myaaVotre infrastructure IT estelle prête pour ère du cognitive business ? Faites cette évaluation pour le savoir immédiatement.',
		'myliMobileFirst Foundation-myliAPI Connect-myliIBM Cloudant-myliSwift@IBM-myppRetour sur mobilité : capturer la valeur cachée-myimimages/Thumbnail160.jpg-myaaDécouvrez pourquoi appli de calcul du ROI dans la mobilité est bien plus qune application sympa');
var navsonrightArrayone = new Array('myliOutils pour applications mobiles-myliIBM Blueworks Live-myliIBM Bluemix-myliCloud Managed Services-myppDirecteurs informatiques, obtenez un avantage concurrentiel en utilisant le cloud hybride-myimimages/cloudfc.jpg-myaaétude',
		'myliCognitive BusinessGalerie-myliapplications cognitivesSolutions-myliIBM Marketplace-myppVotre avenir cognitif-myimimages/cognitive.jpg-myaaLisez ce rapport del IBM Institute for Business Value pour savoir comment le cognitive business va changer notre vie et notre façon de travailler',
		'myliAnalyse del-myliexpérience client-myliIBM Marketing Cloud-myliCommerce on Cloud-myppSolution IBM de cartographie du parcours des clients-myimimages/commercefc.png-myaaVisualisez de façon collaborative le parcours de vos clients. Créez et affinez des expériences personnalisées pour des dizaines de segments prioritaires.',
		'myliWatson Internet of Things-myliPlateforme Watson IoT-myliGestion des équipements-myppWatson Internet of Things-myimimages/iotfc.jpg-myaaDécouvrez comment IoT cognitif va transformer notre manière dappréhender le monde physique (US)',
		'myliMobileFirst Foundation-myliAPI Connect-myliIBM Cloudant-myppProduit à la une : Expert seller app with Box-myimimages/platform380.jpg-myaaAccédez à des gammes de produits et de services à jour pour mieux préparer vos réunions avec vos clients et réaliser plus de ventes',
		'myliIBM Power Systems-myliIBM z Systems-myliIBM LinuxONE-myliIBM Storage-myppÉvaluation détat de préparation infrastructure IT-myimimages/itinfrafc.jpg-myaaVotre infrastructure IT estelle prête pour ère du cognitive business ? Faites cette évaluation pour le savoir immédiatement.',
		'myliMobileFirst Foundation-myliAPI Connect-myliIBM Cloudant-myliSwift@IBM-myppRetour sur mobilité : capturer la valeur cachée-myimimages/Thumbnail160.jpg-myaaDécouvrez pourquoi appli de calcul du ROI dans la mobilité est bien plus qune application sympa');
var navsonrightArraytwo = new Array('myliAnalyse del-myliexpérience client-myliIBM Marketing Cloud-myliCommerce on Cloud-myppSolution IBM de cartographie du parcours des clients-myimimages/commercefc.png-myaaVisualisez de façon collaborative le parcours de vos clients. Créez et affinez des expériences personnalisées pour des dizaines de segments prioritaires.',
		'myliWatson Internet of Things-myliPlateforme Watson IoT-myliGestion des équipements-myppWatson Internet of Things-myimimages/iotfc.jpg-myaaDécouvrez comment IoT cognitif va transformer notre manière dappréhender le monde physique (US)',
		'myliMobileFirst Foundation-myliAPI Connect-myliIBM Cloudant-myppProduit à la une : Expert seller app with Box-myimimages/platform380.jpg-myaaAccédez à des gammes de produits et de services à jour pour mieux préparer vos réunions avec vos clients et réaliser plus de ventes');
		
$(function(){
	var array = new Array();
	function initTool(arr,index){
		array=null;
		array=arr[index];
		// console.log(array);
		return array.split('-');
	}
	function leftdivlInit(index){
		$('.leftdivl').empty();
		var a = new Array();
		a = initTool(navsonArray,index);
		// console.log(a);
		for(var i=0;i<a.length;i++){
			$('.leftdivl').append('<li>'+a[i]+'</li>');
		}
	}
	function rightdivlInit(arr,index){
	var arrayone = new Array(); 
		arrayone= initTool(arr,index);
		for(var i=0;i<arrayone.length;i++){
			if(arrayone[i].substring(0,4)=='myli'){
				$('.rightdivl ul').append('<li>'+arrayone[i].substring(4)+'</li>');
			}else if(arrayone[i].substring(0,4)=='mypp'){
				$('.rightdivr p').eq(0).text(arrayone[i].substring(4));
			}else if(arrayone[i].substring(0,4)=='myaa'){
				$('.rightdivr').find('a').text(arrayone[i].substring(4));
			}else if(arrayone[i].substring(0,4)=='myim'){
				$('.rightdivr').find('img').attr('src',arrayone[i].substring(4));
			}
		}
	}
	// 1 2 4
	var isnavson=0;
	var leftnavindex=0;
	
	$('.ibmnav div').mouseover(function(){
		if($(this).index()==1){
			isnavson=1;
			$('.navson').stop().animate({top:'50px'},300);
			$('.ibmnavbox').css({borderBottom:'1px solid gray'});
			$('.developers').hide();
			leftdivlInit(0);
			$('.leftdivl').find('li').hover(function(){
				$(this).css({background:'blue',color:'white'});
				var span=$('<span></span>').text('→');
				span.css({fontSize:'18px',float:'right',marginRight:'10px'});
				if($(this).find('span').text().length==0){
					$(this).append(span);
				}
				$(this).find('span').show();
				$('.rightdivt').text($(this).text().substring(0,$(this).text().length-1));
				$('.rightdivl ul').text('');
				rightdivlInit(navsonrightArray,$(this).index());
				leftnavindex=$(this).index();
			},function(){
				$(this).find('span').hide();
				$(this).css({background:'none',color:'black'});
				$(this).css({background:'none',color:'black'});
			});
		}else if($(this).index()==2){
			isnavson=1;
			$('.navson').stop().animate({top:'50px'},300);
			$('.ibmnavbox').css({borderBottom:'1px solid gray'});
			$('.developers').hide();
			leftdivlInit(1);
			$('.leftdivl').find('li').hover(function(){
				$(this).css({background:'blue',color:'white'});
				var span=$('<span></span>').text('→');
				span.css({fontSize:'18px',float:'right',marginRight:'10px',display:'block'});
				if($(this).find('span').text().length==0){
					$(this).append(span);
				}
				$(this).find('span').show();
				$('.rightdivt').text($(this).text().substring(0,$(this).text().length-1));
				$('.rightdivl ul').text('');
				rightdivlInit(navsonrightArrayone,$(this).index());
				leftnavindex=$(this).index();
			},function(){
				$(this).find('span').hide();
				$(this).css({background:'none',color:'black'});
				$(this).css({background:'none',color:'black'});
			});
		}else if( $(this).index()==4){
			isnavson=1;
			$('.navson').stop().animate({top:'50px'},300);
			$('.ibmnavbox').css({borderBottom:'1px solid gray'});
			$('.developers').hide();
			leftdivlInit(2);
			$('.leftdivl').find('li').hover(function(){
				$(this).css({background:'blue',color:'white'});
				var span=$('<span></span>').text('→');
				span.css({fontSize:'18px',float:'right',marginRight:'10px'});
				if($(this).find('span').text().length==0){
					$(this).append(span);
				}
				$(this).find('span').show();
				$('.rightdivt').text($(this).text().substring(0,$(this).text().length-1));
				$('.rightdivl ul').text('');
				rightdivlInit(navsonrightArraytwo,$(this).index());
				leftnavindex=$(this).index();
			},function(){
				$(this).find('span').hide();
				$(this).css({background:'none',color:'black'});
				$(this).css({background:'none',color:'black'});
			});
		}else{
			if($(this).index()==3){
				$('.developers').show();
			}else{
				$('.developers').hide();
			}
			$('.navson').stop().animate({top:'-110%'},300);
			isnavson=2;
			$('.ibmnavbox').css({borderBottom:'none'});
		}
	});

	$('.sonrightdiv').hover(function(){
		$('.leftdivl').find('li').eq(leftnavindex).css({background:'blue',color:'white'}).find('span').show();
	},function(){
		$('.leftdivl').find('li').eq(leftnavindex).css({background:'none',color:'black'}).find('span').hide();
	})
	
	// $('.leftdivl').on('hover','li',function(){
	// 	$(this).css({background:'blue',color:'white'});
	// 	var span=$('<span></span>').text('→');
	// 	span.css({fontSize:'18px',float:'right',marginRight:'10px'});
	// 	$(this).append(span);
	// 	$('.rightdivt').text($(this).text().substring(0,$(this).text().length-1));
	// 	$('.rightdivl ul').text('');
	// 	rightdivlInit($(this).index());
	// },function(){
	// 	$(this).find('span').text('');
	// 	$(this).css({background:'none',color:'black'});
	// 	$(this).css({background:'none',color:'black'});
	// });
	
	$('.navson').mouseleave(function(){
		$(this).stop().animate({top:'-110%'},300);
		isnavson=2;
		$('.ibmnavbox').css({borderBottom:'none'});
	});
	$('.slideUp').click(function(){
		$('.navson').animate({top:'-110%'},300);
	});
	$('.developers').mouseleave(function(){
		$(this).hide();
	});

	$('.ibmnavsecond div').mouseover(function(){
		if($(this).index()==1){
			$('.myibm').show();
		}else{
			$('.myibm').hide();
		}
	});
	$('.myibm').mouseleave(function(){
		$(this).hide();
	});

	var flag1=0;
	$('.ibmnavsecond div:nth-of-type(3)').find('span').hover(function(event){
		event.stopPropagation();
		$(this).css({boxShadow:'0 0 5px blue',color:'blue'});
		$('.ibmnavsecond div:nth-of-type(3)').css({boxShadow:'none'});
	},function(){
		$(this).css({boxShadow:'none',color:'black'});
	});
	$('.ibmnavsecond div:nth-of-type(3)').mouseover(function(){
		$(this).css({boxShadow:'0 0 5px blue'});
	});
	$('.ibmnavsecond div:nth-of-type(3)').mouseleave(function(){
		$(this).find('input').focus(function(){
			$('.ibmnavsecond div:nth-of-type(3)').css({boxShadow:'0 0 5px blue'});
			flag1=1;
		});
		if(flag1==0){
			$(this).css({boxShadow:'none'});
		}
	});
	$('.ibmnavsecond div:nth-of-type(3)').find('input').blur(function(){
		flag1=0;
		$('.ibmnavsecond div:nth-of-type(3)').css({boxShadow:'none'});
	});

	var bool = true;
	$('.cenavoff').click(function(){
		if(bool){
			$('body').css({'overflowY':'hidden'});
			$('.opacity').fadeIn(300);
			$('.cenavdiv').stop().animate({right:'0'},300);
			bool = false;
		}else{
			$('body').css({'overflowY':'auto'});
			$('.opacity').fadeOut(300);
			$('.cenavdiv').stop().animate({right:'-100%'},300);
			bool = true;
		}
	});
	$('.cenavdiv ul>li').click(function(event){
		event.stopPropagation();
	})
	$('.opacity').click(function(){
		$('body').css({'overflowY':'auto'});
		$('.opacity').fadeOut(300);
	});
	var istrue=0;
	$('.cenavdiv ul li').click(function(){
		if(istrue==0){
			if($(this).find('span').length==1){
				$(this).find('ol').slideDown(300);
				$(this).find('span').text('－');
				istrue=1;
			}
		}else{
			if($(this).find('span').length==1){
				$(this).find('ol').slideUp(300);
				$(this).find('span').text('+');
				istrue=0;
			}
		}
	});


	var flag=true;
	var isclick=false;
	$('.selects').click(function(event){
		event.stopPropagation();
		if(flag){
			$('.textarea').show();
			$('.textarea').find('input').focus();
			$('.selects').find('span').eq(1).text('△');
			flag=false;
		}else{
			$('.textarea').hide();
			$('.selects').find('span').eq(1).text('▽');
			flag=true;
		}
		isclick=false;
		if(!isclick){
			var selects=$('.selects').find('span').eq(0).text();
			for(var i=0;i<$('.textarea ul li').length;i++){
				if(selects==$('.textarea ul li').eq(i).text()){
					$('.textarea ul li').eq(i).css({background:'blue',color:'white'}).siblings().css({background:'none',color:'black'});
					return;
				}
			}
		}
	});
	
	$('.textarea ul li').mouseover(function(){
		$(this).css({background:'blue',color:'white'}).siblings().css({background:'none',color:'black'});
	});
	$('.textarea ul li').click(function(){
		isclick=true;
		$('.selects').find('span').eq(0).text($(this).text());
		$(this).css({background:'blue',color:'white'}).siblings().css({background:'none',color:'black'});
		$('.textarea').hide();
		if(flag){
			$('.selects').find('span').eq(1).text('△');
		}else{
			$('.selects').find('span').eq(1).text('▽');
		}
	});
	$(window).click(function(){
		$('.textarea').hide();
		$('.selects').find('span').eq(1).text('▽');
	});

	var scrollBefor=0,scrollAfter=0;
	$(window).scroll(function(){
		scrollAfter=$(this).scrollTop();
		if(scrollAfter>scrollBefor){
			if(isnavson==1){
				
			}else{
				$('.ibmnavbox').stop().animate({top:'-52px'},300);
			}
			if(scrollBefor>500){
				$('.Stick').stop().animate({right:'5%'});
			}
		}else{
			$('.ibmnavbox').stop().animate({top:'0'},300);
			$('.Stick').stop().animate({right:'-40px'});

		}
		if($(this).scrollTop()==0){
			$('.ibmnavbox').stop().animate({top:'0'},300);
		}
		setTimeout(function(){scrollBefor=scrollAfter},0);
	});

	$('.Stick').click(function(){
		$(window).scrollTop(0);
	});
})
var preload;
var preloaderTimeout = 500;
var homeClicked = 0;
var m; // MINUTES
var windowHeight, windowWidth, halfWindowWidth, halfWindowHeight;
var smoothScrollActive = "true";
var jsScroll = $('.js-scroll');
var jsScrollPart = $('.js-scroll-part');
var section;
var divs;
var smooth;
var windowWidth = $(window).innerWidth();
var mobileDesktop = 700;
var mobileDevice = false;

// SET OBJECTS AS VARIABLES
var domWrapper = $('.wrapper');
var domBody = $( "body" );
var pageSweeper = $('.page-sweeper');
var pageSweeperUnder = $('.page-sweeper-under');
var desktopOnlyDiv = $('.desktop-only');
var noTouchDiv = $('.no-touch-div');
var turnedOff = $('.turned-off');
var preloaderWrap = $('.preloader-wrap');
var jsCursorFollower = $('.js-cursor-follower');
var jsLetterHover = $('.js-letter-hover');
var jsCursorBack = $('.js-cursor-back');

var soundVolume = 10;
var currentTime;
var duration;
var navLogo = $('.logo-wrap');
var socialNav = $('.social-nav');
var jsOpenNav = $('.js-open-nav');
var jsCloseNav = $('.js-close-nav');
var navMenu = $('.nav-menu');

var homeBGColors = $('.home-bg');
var homeVidMaskWrap = $('.home .wrapper');
var homeActiveLetter = $('.letters');

var case1 = ['','','','','','',''],
	case2 = ['','','','','','',''],
	case3 = ['','','','','','',''],
	case4 = ['','','','','','',''],
	case5 = ['','','','','','',''],
	case6 = ['','','','','','',''],
	case7 = ['','','','','','',''],
	case8 = ['','','','','','',''],
	case9 = ['','','','','','',''],
	case10 = ['','','','','','',''],
	case11 = ['','','','','','',''],
	case12 = ['','','','','','',''],
	case13 = ['','','','','','',''],
	case14 = ['','','','','','',''],
	case15 = ['','','','','','','']

var homeCases = [case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12, case13, case14, case15];
var homeContentToPopulate = 0;
var homeCasesTotal = 0;
var homeCasesTotalCalculated = false;
var maxHomeCases = 15;
var typeWrap = $('.type-wrap');
var homeTypeWrapTitle = $('.type-wrap .pr-case-title');
var homeTypeWrapA = $('.type-wrap a.pr-home-link');
var homeTypeWrapClient = $('.type-wrap .pr-case-client');
var homeTypeWrapDesc = $('.type-wrap .pr-case-desc');
var nLetterIn = false;

var ytPlayer = $('.js-yt-player');
var videoLetterIn;
var jsMonitorHomeCase = $('.js-monitor-home-case');
var jsMonitorHomeState = $('.js-monitor-home-state');

var jsLetterPart = $('.letters li');
var FullScreenTransition = $('.full-screen-transition');
var jsPreviewVideo = $('.js-preview-video, .letters li');
var letterPart = $('.letters li');

var caseVideoWrap = $('.case-video-wrap');
var caseVidMonitor = $('.js-case-vid-monitor');
var jsCurrentTimeWrap = $('.js-current-time-wrap');
var jsCaseHeadOverflows = $('.js-case-head-overflows');
var pageNav = $('.page-nav');
var caseRightPanel = $('.case-right-panel');
var jsOpenGallery = $('.js-open-gallery');
var callToAction = $('.cta');
var statMask = $('.stat-mask');

var currentTimeline = $('.current-timeline');
var currentNode = $('.current-node');
var jsCurrentTime = $('.js-current-time');
var jsTotalTime = $('.js-total-time');
var timelineCaptions = $('.js-timeline-captions');
var timePointsLI = $('.time-points li');

var imgGallery = $('.img-gallery');
var galleryImgFigure = $('.gallery-img figure');
var jsCloseGallery = $('.js-close-gallery');
var jsGalleryNext = $('.js-gallery-next');
var jsGalleryPrev = $('.js-gallery-prev');

var jsVideoTakeover = $('.js-video-takeover');
var jsCloseVideoTakeover = $('.js-close-video-takeover');
var fixedElements = $('.fixed-elements');
var jsGrid = $('.js-grid');
var muteBtn = $('.js-mute-sound');

var caseThumbs = $('.case-thumbs');
var caseThumbsLI = $('.case-thumbs li');

var mapWrap = $('.map-wrap')

var homeVideoWrap = $('.home-vid-wrap');
var homeVideoMaskWrap = $('.home-vid-mask-wrap');
var homeCaseChange = true;
var homeVideo = document.getElementById('home-video');
var homeState = 1;
var nurtureLetterIndex = 1;
var jsPrevHomeCase = $('.js-prev-home-case');
var jsNextHomeCase = $('.js-next-home-case');
var homeVidBGIMGs = $('.home-vid-bg-imgs');
var homeColorBGs = $('.home-bg');
var homeColorBGLI = $('.home-bg li');


if ($('body.case').length ) {
	var perchData = $('.perch-data-holder');
	var caseVideoID = $('.perch-data-holder').attr('data-video-id');
	var projBGColor = $('.img-color-overlay, .page-sweeper-under div, .current-node span, .time-points li, .current-timeline');
	var duration;
	var jsCloseCaseVideoTakeover = $('.js-close-case-video-takeover');
	var caseScrollMonitor;
	var totalGallImgs = 10;
	var galleryTotalCalculated = false;
	var skipToStart = $('.skip-start');
	var jsVideoStudy = $('.js-video-study-on');
	var studyVideoID = jsVideoStudy.attr('data-video-study-id');
	var videoStudyActive = false;
}

if ($('body.about').length ) {
	var aboutPart1;
	var aboutPart2;
	var aboutPart3;
	var aboutPart4;
	var aboutPart5;
	var aboutPart6;
	var jsAboutVideo = $('.js-about-video');
	var jsAboutOverflowOff = $('.js-about-overflow-off');
	var jsAboutOverflowOn = $('.js-about-overflow-on');
}

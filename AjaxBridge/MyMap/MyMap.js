/**
 * WARNING! THIS IS A GENERATED FILE, AND WILL BE RE-GENERATED EACH TIME THE
 * AJAXBRIDGE IS RUN.
 *
 * You should keep your javascript code inside this file as light as possible, 
 * and rather keep the body of your Ajax application in separate *.js files. 
 *
 * Do make a backup of your changes, before re-generating this file (AjaxBridge 
 * will display a warning message to you).
 *
 * Please refer to the built-in documentation inside the AjaxBridge application 
 * for help on using this file.
 */
 
 
/**
 * Application "MyMap.mxml"
 */

/**
 * The "MyMap" javascript namespace. All the functions/variables you
 * have selected under the "MyMap.mxml" in the tree will be
 * available as static members of this namespace object.
 */
MyMap = {};


/**
 * Listen for the instantiation of the Flex application over the bridge
 */
FABridge.addInitializationCallback("b_MyMap", MyMapReady);


/**
 * Hook here all the code that must run as soon as the "MyMap" class
 * finishes its instantiation over the bridge.
 *
 * For basic tasks, such as running a Flex method on the click of a javascript
 * button, chances are that both Ajax and Flex may well have loaded before the 
 * user actually clicks the button.
 *
 * However, using the "MyMapReady()" is the safest way, as it will 
 * let Ajax know that involved Flex classes are available for use.
 */
function MyMapReady() {

	// Initialize the "root" object. This represents the actual 
	// "MyMap.mxml" flex application.
	b_MyMap_root = FABridge["b_MyMap"].root();
	

	// Global variables in the "MyMap.mxml" application (converted 
	// to getters and setters)

	MyMap.getMyMap = function () {
		return b_MyMap_root.getMyMap();
	};


	MyMap.getMytilelayer = function () {
		return b_MyMap_root.getMytilelayer();
	};


	MyMap.getMygraphicsLayer = function () {
		return b_MyMap_root.getMygraphicsLayer();
	};


	MyMap.getLength = function () {
		return b_MyMap_root.getLength();
	};


	MyMap.getAccessibilityImplementation = function () {
		return b_MyMap_root.getAccessibilityImplementation();
	};


	MyMap.getAccessibilityImplementation = function () {
		return b_MyMap_root.getAccessibilityImplementation();
	};


	MyMap.getDoubleClickEnabled = function () {
		return b_MyMap_root.getDoubleClickEnabled();
	};


	MyMap.getDoubleClickEnabled = function () {
		return b_MyMap_root.getDoubleClickEnabled();
	};


	MyMap.getContextMenu = function () {
		return b_MyMap_root.getContextMenu();
	};


	MyMap.getContextMenu = function () {
		return b_MyMap_root.getContextMenu();
	};


	MyMap.getTabEnabled = function () {
		return b_MyMap_root.getTabEnabled();
	};


	MyMap.getTabEnabled = function () {
		return b_MyMap_root.getTabEnabled();
	};


	MyMap.getSoftKeyboardInputAreaOfInterest = function () {
		return b_MyMap_root.getSoftKeyboardInputAreaOfInterest();
	};


	MyMap.getSoftKeyboardInputAreaOfInterest = function () {
		return b_MyMap_root.getSoftKeyboardInputAreaOfInterest();
	};


	MyMap.getTabIndex = function () {
		return b_MyMap_root.getTabIndex();
	};


	MyMap.getTabIndex = function () {
		return b_MyMap_root.getTabIndex();
	};


	MyMap.getMouseEnabled = function () {
		return b_MyMap_root.getMouseEnabled();
	};


	MyMap.getMouseEnabled = function () {
		return b_MyMap_root.getMouseEnabled();
	};


	MyMap.getFocusRect = function () {
		return b_MyMap_root.getFocusRect();
	};


	MyMap.getFocusRect = function () {
		return b_MyMap_root.getFocusRect();
	};


	MyMap.getNeedsSoftKeyboard = function () {
		return b_MyMap_root.getNeedsSoftKeyboard();
	};


	MyMap.getNeedsSoftKeyboard = function () {
		return b_MyMap_root.getNeedsSoftKeyboard();
	};


	MyMap.getMouseChildren = function () {
		return b_MyMap_root.getMouseChildren();
	};


	MyMap.getSkin = function () {
		return b_MyMap_root.getSkin();
	};


	MyMap.getEnabled = function () {
		return b_MyMap_root.getEnabled();
	};


	MyMap.getMouseEnabled = function () {
		return b_MyMap_root.getMouseEnabled();
	};


	MyMap.getSuggestedFocusSkinExclusions = function () {
		return b_MyMap_root.getSuggestedFocusSkinExclusions();
	};


	MyMap.getBaselinePosition = function () {
		return b_MyMap_root.getBaselinePosition();
	};


	MyMap.getErrorString = function () {
		return b_MyMap_root.getErrorString();
	};


	MyMap.getMouseChildren = function () {
		return b_MyMap_root.getMouseChildren();
	};


	MyMap.getMouseChildren = function () {
		return b_MyMap_root.getMouseChildren();
	};


	MyMap.getTabChildren = function () {
		return b_MyMap_root.getTabChildren();
	};


	MyMap.getTabChildren = function () {
		return b_MyMap_root.getTabChildren();
	};


	MyMap.getNumChildren = function () {
		return b_MyMap_root.getNumChildren();
	};


	MyMap.getTextSnapshot = function () {
		return b_MyMap_root.getTextSnapshot();
	};


	MyMap.getButtonMode = function () {
		return b_MyMap_root.getButtonMode();
	};


	MyMap.getButtonMode = function () {
		return b_MyMap_root.getButtonMode();
	};


	MyMap.getSoundTransform = function () {
		return b_MyMap_root.getSoundTransform();
	};


	MyMap.getSoundTransform = function () {
		return b_MyMap_root.getSoundTransform();
	};


	MyMap.getUseHandCursor = function () {
		return b_MyMap_root.getUseHandCursor();
	};


	MyMap.getUseHandCursor = function () {
		return b_MyMap_root.getUseHandCursor();
	};


	MyMap.getDropTarget = function () {
		return b_MyMap_root.getDropTarget();
	};


	MyMap.getGraphics = function () {
		return b_MyMap_root.getGraphics();
	};


	MyMap.getHitArea = function () {
		return b_MyMap_root.getHitArea();
	};


	MyMap.getHitArea = function () {
		return b_MyMap_root.getHitArea();
	};


	MyMap.getDefaultButton = function () {
		return b_MyMap_root.getDefaultButton();
	};


	MyMap.getDefaultButton = function () {
		return b_MyMap_root.getDefaultButton();
	};


	MyMap.getTabIndex = function () {
		return b_MyMap_root.getTabIndex();
	};


	MyMap.getFrameRate = function () {
		return b_MyMap_root.getFrameRate();
	};


	MyMap.getParameters = function () {
		return b_MyMap_root.getParameters();
	};


	MyMap.getRuntimeDPIProvider = function () {
		return b_MyMap_root.getRuntimeDPIProvider();
	};


	MyMap.getRuntimeDPIProvider = function () {
		return b_MyMap_root.getRuntimeDPIProvider();
	};


	MyMap.getPreloaderChromeColor = function () {
		return b_MyMap_root.getPreloaderChromeColor();
	};


	MyMap.getControlBarLayout = function () {
		return b_MyMap_root.getControlBarLayout();
	};


	MyMap.getControlBarLayout = function () {
		return b_MyMap_root.getControlBarLayout();
	};


	MyMap.getControlBarVisible = function () {
		return b_MyMap_root.getControlBarVisible();
	};


	MyMap.getControlBarVisible = function () {
		return b_MyMap_root.getControlBarVisible();
	};


	MyMap.getUrl = function () {
		return b_MyMap_root.getUrl();
	};


	MyMap.getPercentHeight = function () {
		return b_MyMap_root.getPercentHeight();
	};


	MyMap.getResizeForSoftKeyboard = function () {
		return b_MyMap_root.getResizeForSoftKeyboard();
	};


	MyMap.getResizeForSoftKeyboard = function () {
		return b_MyMap_root.getResizeForSoftKeyboard();
	};


	MyMap.getPageTitle = function () {
		return b_MyMap_root.getPageTitle();
	};


	MyMap.getApplicationDPI = function () {
		return b_MyMap_root.getApplicationDPI();
	};


	MyMap.getApplicationDPI = function () {
		return b_MyMap_root.getApplicationDPI();
	};


	MyMap.getScriptRecursionLimit = function () {
		return b_MyMap_root.getScriptRecursionLimit();
	};


	MyMap.getScriptTimeLimit = function () {
		return b_MyMap_root.getScriptTimeLimit();
	};


	MyMap.getAspectRatio = function () {
		return b_MyMap_root.getAspectRatio();
	};


	MyMap.getControlBarGroup = function () {
		return b_MyMap_root.getControlBarGroup();
	};


	MyMap.getId = function () {
		return b_MyMap_root.getId();
	};


	MyMap.getControlBarContent = function () {
		return b_MyMap_root.getControlBarContent();
	};


	MyMap.getControlBarContent = function () {
		return b_MyMap_root.getControlBarContent();
	};


	MyMap.getViewSourceURL = function () {
		return b_MyMap_root.getViewSourceURL();
	};


	MyMap.getViewSourceURL = function () {
		return b_MyMap_root.getViewSourceURL();
	};


	MyMap.getColorCorrection = function () {
		return b_MyMap_root.getColorCorrection();
	};


	MyMap.getColorCorrection = function () {
		return b_MyMap_root.getColorCorrection();
	};


	MyMap.getSplashScreenImage = function () {
		return b_MyMap_root.getSplashScreenImage();
	};


	MyMap.getSplashScreenImage = function () {
		return b_MyMap_root.getSplashScreenImage();
	};


	MyMap.getSplashScreenMinimumDisplayTime = function () {
		return b_MyMap_root.getSplashScreenMinimumDisplayTime();
	};


	MyMap.getToolTip = function () {
		return b_MyMap_root.getToolTip();
	};


	MyMap.getUsePreloader = function () {
		return b_MyMap_root.getUsePreloader();
	};


	MyMap.getPercentWidth = function () {
		return b_MyMap_root.getPercentWidth();
	};


	MyMap.getRuntimeDPI = function () {
		return b_MyMap_root.getRuntimeDPI();
	};


	MyMap.getPreloader = function () {
		return b_MyMap_root.getPreloader();
	};


	MyMap.getSplashScreenScaleMode = function () {
		return b_MyMap_root.getSplashScreenScaleMode();
	};


	MyMap.getCacheHeuristic = function () {
		return b_MyMap_root.getCacheHeuristic();
	};


	MyMap.getRight = function () {
		return b_MyMap_root.getRight();
	};


	MyMap.getRight = function () {
		return b_MyMap_root.getRight();
	};


	MyMap.getExplicitHeight = function () {
		return b_MyMap_root.getExplicitHeight();
	};


	MyMap.getExplicitHeight = function () {
		return b_MyMap_root.getExplicitHeight();
	};


	MyMap.getParent = function () {
		return b_MyMap_root.getParent();
	};


	MyMap.getCacheAsBitmap = function () {
		return b_MyMap_root.getCacheAsBitmap();
	};


	MyMap.getMinHeight = function () {
		return b_MyMap_root.getMinHeight();
	};


	MyMap.getMinHeight = function () {
		return b_MyMap_root.getMinHeight();
	};


	MyMap.getFocusPane = function () {
		return b_MyMap_root.getFocusPane();
	};


	MyMap.getFocusPane = function () {
		return b_MyMap_root.getFocusPane();
	};


	MyMap.getHasLayoutMatrix3D = function () {
		return b_MyMap_root.getHasLayoutMatrix3D();
	};


	MyMap.getAccessibilityShortcut = function () {
		return b_MyMap_root.getAccessibilityShortcut();
	};


	MyMap.getAccessibilityShortcut = function () {
		return b_MyMap_root.getAccessibilityShortcut();
	};


	MyMap.getExplicitWidth = function () {
		return b_MyMap_root.getExplicitWidth();
	};


	MyMap.getExplicitWidth = function () {
		return b_MyMap_root.getExplicitWidth();
	};


	MyMap.getMeasuredWidth = function () {
		return b_MyMap_root.getMeasuredWidth();
	};


	MyMap.getMeasuredWidth = function () {
		return b_MyMap_root.getMeasuredWidth();
	};


	MyMap.getTransform = function () {
		return b_MyMap_root.getTransform();
	};


	MyMap.getTransform = function () {
		return b_MyMap_root.getTransform();
	};


	MyMap.getBaselinePosition = function () {
		return b_MyMap_root.getBaselinePosition();
	};


	MyMap.getAutomationTabularData = function () {
		return b_MyMap_root.getAutomationTabularData();
	};


	MyMap.getLeft = function () {
		return b_MyMap_root.getLeft();
	};


	MyMap.getLeft = function () {
		return b_MyMap_root.getLeft();
	};


	MyMap.getBaseline = function () {
		return b_MyMap_root.getBaseline();
	};


	MyMap.getBaseline = function () {
		return b_MyMap_root.getBaseline();
	};


	MyMap.getToolTip = function () {
		return b_MyMap_root.getToolTip();
	};


	MyMap.getToolTip = function () {
		return b_MyMap_root.getToolTip();
	};


	MyMap.getAutomationOwner = function () {
		return b_MyMap_root.getAutomationOwner();
	};


	MyMap.getParentApplication = function () {
		return b_MyMap_root.getParentApplication();
	};


	MyMap.getZ = function () {
		return b_MyMap_root.getZ();
	};


	MyMap.getZ = function () {
		return b_MyMap_root.getZ();
	};


	MyMap.getY = function () {
		return b_MyMap_root.getY();
	};


	MyMap.getY = function () {
		return b_MyMap_root.getY();
	};


	MyMap.getX = function () {
		return b_MyMap_root.getX();
	};


	MyMap.getX = function () {
		return b_MyMap_root.getX();
	};


	MyMap.getVisible = function () {
		return b_MyMap_root.getVisible();
	};


	MyMap.getVisible = function () {
		return b_MyMap_root.getVisible();
	};


	MyMap.getNumAutomationChildren = function () {
		return b_MyMap_root.getNumAutomationChildren();
	};


	MyMap.getHeight = function () {
		return b_MyMap_root.getHeight();
	};


	MyMap.getHeight = function () {
		return b_MyMap_root.getHeight();
	};


	MyMap.getMaxWidth = function () {
		return b_MyMap_root.getMaxWidth();
	};


	MyMap.getMaxWidth = function () {
		return b_MyMap_root.getMaxWidth();
	};


	MyMap.getMeasuredMinWidth = function () {
		return b_MyMap_root.getMeasuredMinWidth();
	};


	MyMap.getMeasuredMinWidth = function () {
		return b_MyMap_root.getMeasuredMinWidth();
	};


	MyMap.getActiveEffects = function () {
		return b_MyMap_root.getActiveEffects();
	};


	MyMap.getCursorManager = function () {
		return b_MyMap_root.getCursorManager();
	};


	MyMap.getAlpha = function () {
		return b_MyMap_root.getAlpha();
	};


	MyMap.getAlpha = function () {
		return b_MyMap_root.getAlpha();
	};


	MyMap.getTweeningProperties = function () {
		return b_MyMap_root.getTweeningProperties();
	};


	MyMap.getTweeningProperties = function () {
		return b_MyMap_root.getTweeningProperties();
	};


	MyMap.getExplicitMinWidth = function () {
		return b_MyMap_root.getExplicitMinWidth();
	};


	MyMap.getExplicitMinWidth = function () {
		return b_MyMap_root.getExplicitMinWidth();
	};


	MyMap.getDEFAULT_MEASURED_MIN_WIDTH = function () {
		return b_MyMap_root.getDEFAULT_MEASURED_MIN_WIDTH();
	};


	MyMap.getVerticalCenter = function () {
		return b_MyMap_root.getVerticalCenter();
	};


	MyMap.getVerticalCenter = function () {
		return b_MyMap_root.getVerticalCenter();
	};


	MyMap.getPercentWidth = function () {
		return b_MyMap_root.getPercentWidth();
	};


	MyMap.getPercentWidth = function () {
		return b_MyMap_root.getPercentWidth();
	};


	MyMap.getUpdateCompletePendingFlag = function () {
		return b_MyMap_root.getUpdateCompletePendingFlag();
	};


	MyMap.getUpdateCompletePendingFlag = function () {
		return b_MyMap_root.getUpdateCompletePendingFlag();
	};


	MyMap.getRotation = function () {
		return b_MyMap_root.getRotation();
	};


	MyMap.getRotation = function () {
		return b_MyMap_root.getRotation();
	};


	MyMap.getDEFAULT_MAX_HEIGHT = function () {
		return b_MyMap_root.getDEFAULT_MAX_HEIGHT();
	};


	MyMap.getScreen = function () {
		return b_MyMap_root.getScreen();
	};


	MyMap.getFilters = function () {
		return b_MyMap_root.getFilters();
	};


	MyMap.getFilters = function () {
		return b_MyMap_root.getFilters();
	};


	MyMap.getFlexContextMenu = function () {
		return b_MyMap_root.getFlexContextMenu();
	};


	MyMap.getFlexContextMenu = function () {
		return b_MyMap_root.getFlexContextMenu();
	};


	MyMap.getDescriptor = function () {
		return b_MyMap_root.getDescriptor();
	};


	MyMap.getDescriptor = function () {
		return b_MyMap_root.getDescriptor();
	};


	MyMap.getAccessibilityName = function () {
		return b_MyMap_root.getAccessibilityName();
	};


	MyMap.getAccessibilityName = function () {
		return b_MyMap_root.getAccessibilityName();
	};


	MyMap.getCurrentState = function () {
		return b_MyMap_root.getCurrentState();
	};


	MyMap.getCurrentState = function () {
		return b_MyMap_root.getCurrentState();
	};


	MyMap.getContentMouseX = function () {
		return b_MyMap_root.getContentMouseX();
	};


	MyMap.getContentMouseY = function () {
		return b_MyMap_root.getContentMouseY();
	};


	MyMap.getTabFocusEnabled = function () {
		return b_MyMap_root.getTabFocusEnabled();
	};


	MyMap.getTabFocusEnabled = function () {
		return b_MyMap_root.getTabFocusEnabled();
	};


	MyMap.getExplicitMinHeight = function () {
		return b_MyMap_root.getExplicitMinHeight();
	};


	MyMap.getExplicitMinHeight = function () {
		return b_MyMap_root.getExplicitMinHeight();
	};


	MyMap.getFocusEnabled = function () {
		return b_MyMap_root.getFocusEnabled();
	};


	MyMap.getFocusEnabled = function () {
		return b_MyMap_root.getFocusEnabled();
	};


	MyMap.getMinWidth = function () {
		return b_MyMap_root.getMinWidth();
	};


	MyMap.getMinWidth = function () {
		return b_MyMap_root.getMinWidth();
	};


	MyMap.getAccessibilityDescription = function () {
		return b_MyMap_root.getAccessibilityDescription();
	};


	MyMap.getAccessibilityDescription = function () {
		return b_MyMap_root.getAccessibilityDescription();
	};


	MyMap.getDepth = function () {
		return b_MyMap_root.getDepth();
	};


	MyMap.getDepth = function () {
		return b_MyMap_root.getDepth();
	};


	MyMap.getStyleName = function () {
		return b_MyMap_root.getStyleName();
	};


	MyMap.getStyleName = function () {
		return b_MyMap_root.getStyleName();
	};


	MyMap.getStyleManager = function () {
		return b_MyMap_root.getStyleManager();
	};


	MyMap.getMaxHeight = function () {
		return b_MyMap_root.getMaxHeight();
	};


	MyMap.getMaxHeight = function () {
		return b_MyMap_root.getMaxHeight();
	};


	MyMap.getOwner = function () {
		return b_MyMap_root.getOwner();
	};


	MyMap.getOwner = function () {
		return b_MyMap_root.getOwner();
	};


	MyMap.getNonInheritingStyles = function () {
		return b_MyMap_root.getNonInheritingStyles();
	};


	MyMap.getNonInheritingStyles = function () {
		return b_MyMap_root.getNonInheritingStyles();
	};


	MyMap.getDEFAULT_MAX_WIDTH = function () {
		return b_MyMap_root.getDEFAULT_MAX_WIDTH();
	};


	MyMap.getId = function () {
		return b_MyMap_root.getId();
	};


	MyMap.getId = function () {
		return b_MyMap_root.getId();
	};


	MyMap.getExplicitMaxWidth = function () {
		return b_MyMap_root.getExplicitMaxWidth();
	};


	MyMap.getExplicitMaxWidth = function () {
		return b_MyMap_root.getExplicitMaxWidth();
	};


	MyMap.getDEFAULT_MEASURED_HEIGHT = function () {
		return b_MyMap_root.getDEFAULT_MEASURED_HEIGHT();
	};


	MyMap.getIsPopUp = function () {
		return b_MyMap_root.getIsPopUp();
	};


	MyMap.getIsPopUp = function () {
		return b_MyMap_root.getIsPopUp();
	};


	MyMap.getInstanceIndices = function () {
		return b_MyMap_root.getInstanceIndices();
	};


	MyMap.getInstanceIndices = function () {
		return b_MyMap_root.getInstanceIndices();
	};


	MyMap.getRepeaterIndices = function () {
		return b_MyMap_root.getRepeaterIndices();
	};


	MyMap.getRepeaterIndices = function () {
		return b_MyMap_root.getRepeaterIndices();
	};


	MyMap.getDesignLayer = function () {
		return b_MyMap_root.getDesignLayer();
	};


	MyMap.getDesignLayer = function () {
		return b_MyMap_root.getDesignLayer();
	};


	MyMap.getBottom = function () {
		return b_MyMap_root.getBottom();
	};


	MyMap.getBottom = function () {
		return b_MyMap_root.getBottom();
	};


	MyMap.getLayoutDirection = function () {
		return b_MyMap_root.getLayoutDirection();
	};


	MyMap.getLayoutDirection = function () {
		return b_MyMap_root.getLayoutDirection();
	};


	MyMap.getRepeaters = function () {
		return b_MyMap_root.getRepeaters();
	};


	MyMap.getRepeaters = function () {
		return b_MyMap_root.getRepeaters();
	};


	MyMap.getFocusManager = function () {
		return b_MyMap_root.getFocusManager();
	};


	MyMap.getFocusManager = function () {
		return b_MyMap_root.getFocusManager();
	};


	MyMap.getParentDocument = function () {
		return b_MyMap_root.getParentDocument();
	};


	MyMap.getProcessedDescriptors = function () {
		return b_MyMap_root.getProcessedDescriptors();
	};


	MyMap.getProcessedDescriptors = function () {
		return b_MyMap_root.getProcessedDescriptors();
	};


	MyMap.getAutomationVisible = function () {
		return b_MyMap_root.getAutomationVisible();
	};


	MyMap.getStates = function () {
		return b_MyMap_root.getStates();
	};


	MyMap.getStates = function () {
		return b_MyMap_root.getStates();
	};


	MyMap.getShowInAutomationHierarchy = function () {
		return b_MyMap_root.getShowInAutomationHierarchy();
	};


	MyMap.getShowInAutomationHierarchy = function () {
		return b_MyMap_root.getShowInAutomationHierarchy();
	};


	MyMap.getDocument = function () {
		return b_MyMap_root.getDocument();
	};


	MyMap.getDocument = function () {
		return b_MyMap_root.getDocument();
	};


	MyMap.getMeasuredMinHeight = function () {
		return b_MyMap_root.getMeasuredMinHeight();
	};


	MyMap.getMeasuredMinHeight = function () {
		return b_MyMap_root.getMeasuredMinHeight();
	};


	MyMap.getMouseFocusEnabled = function () {
		return b_MyMap_root.getMouseFocusEnabled();
	};


	MyMap.getMouseFocusEnabled = function () {
		return b_MyMap_root.getMouseFocusEnabled();
	};


	MyMap.getMeasuredHeight = function () {
		return b_MyMap_root.getMeasuredHeight();
	};


	MyMap.getMeasuredHeight = function () {
		return b_MyMap_root.getMeasuredHeight();
	};


	MyMap.getIsDocument = function () {
		return b_MyMap_root.getIsDocument();
	};


	MyMap.getStyleParent = function () {
		return b_MyMap_root.getStyleParent();
	};


	MyMap.getStyleParent = function () {
		return b_MyMap_root.getStyleParent();
	};


	MyMap.getStyleDeclaration = function () {
		return b_MyMap_root.getStyleDeclaration();
	};


	MyMap.getStyleDeclaration = function () {
		return b_MyMap_root.getStyleDeclaration();
	};


	MyMap.getRepeater = function () {
		return b_MyMap_root.getRepeater();
	};


	MyMap.getEnabled = function () {
		return b_MyMap_root.getEnabled();
	};


	MyMap.getEnabled = function () {
		return b_MyMap_root.getEnabled();
	};


	MyMap.getWidth = function () {
		return b_MyMap_root.getWidth();
	};


	MyMap.getWidth = function () {
		return b_MyMap_root.getWidth();
	};


	MyMap.getTransitions = function () {
		return b_MyMap_root.getTransitions();
	};


	MyMap.getTransitions = function () {
		return b_MyMap_root.getTransitions();
	};


	MyMap.getAccessibilityEnabled = function () {
		return b_MyMap_root.getAccessibilityEnabled();
	};


	MyMap.getAccessibilityEnabled = function () {
		return b_MyMap_root.getAccessibilityEnabled();
	};


	MyMap.getMouseY = function () {
		return b_MyMap_root.getMouseY();
	};


	MyMap.getMouseX = function () {
		return b_MyMap_root.getMouseX();
	};


	MyMap.getClassName = function () {
		return b_MyMap_root.getClassName();
	};


	MyMap.getTop = function () {
		return b_MyMap_root.getTop();
	};


	MyMap.getTop = function () {
		return b_MyMap_root.getTop();
	};


	MyMap.getCachePolicy = function () {
		return b_MyMap_root.getCachePolicy();
	};


	MyMap.getCachePolicy = function () {
		return b_MyMap_root.getCachePolicy();
	};


	MyMap.getRotationZ = function () {
		return b_MyMap_root.getRotationZ();
	};


	MyMap.getRotationZ = function () {
		return b_MyMap_root.getRotationZ();
	};


	MyMap.getDEFAULT_MEASURED_MIN_HEIGHT = function () {
		return b_MyMap_root.getDEFAULT_MEASURED_MIN_HEIGHT();
	};


	MyMap.getRotationX = function () {
		return b_MyMap_root.getRotationX();
	};


	MyMap.getRotationX = function () {
		return b_MyMap_root.getRotationX();
	};


	MyMap.getRotationY = function () {
		return b_MyMap_root.getRotationY();
	};


	MyMap.getRotationY = function () {
		return b_MyMap_root.getRotationY();
	};


	MyMap.getMaintainProjectionCenter = function () {
		return b_MyMap_root.getMaintainProjectionCenter();
	};


	MyMap.getMaintainProjectionCenter = function () {
		return b_MyMap_root.getMaintainProjectionCenter();
	};


	MyMap.getAutomationParent = function () {
		return b_MyMap_root.getAutomationParent();
	};


	MyMap.getAutomationEnabled = function () {
		return b_MyMap_root.getAutomationEnabled();
	};


	MyMap.getHasFocusableChildren = function () {
		return b_MyMap_root.getHasFocusableChildren();
	};


	MyMap.getHasFocusableChildren = function () {
		return b_MyMap_root.getHasFocusableChildren();
	};


	MyMap.getScaleX = function () {
		return b_MyMap_root.getScaleX();
	};


	MyMap.getScaleX = function () {
		return b_MyMap_root.getScaleX();
	};


	MyMap.getScaleY = function () {
		return b_MyMap_root.getScaleY();
	};


	MyMap.getScaleY = function () {
		return b_MyMap_root.getScaleY();
	};


	MyMap.getValidationSubField = function () {
		return b_MyMap_root.getValidationSubField();
	};


	MyMap.getValidationSubField = function () {
		return b_MyMap_root.getValidationSubField();
	};


	MyMap.getSystemManager = function () {
		return b_MyMap_root.getSystemManager();
	};


	MyMap.getSystemManager = function () {
		return b_MyMap_root.getSystemManager();
	};


	MyMap.getInitialized = function () {
		return b_MyMap_root.getInitialized();
	};


	MyMap.getInitialized = function () {
		return b_MyMap_root.getInitialized();
	};


	MyMap.getAutomationDelegate = function () {
		return b_MyMap_root.getAutomationDelegate();
	};


	MyMap.getAutomationDelegate = function () {
		return b_MyMap_root.getAutomationDelegate();
	};


	MyMap.getIncludeInLayout = function () {
		return b_MyMap_root.getIncludeInLayout();
	};


	MyMap.getIncludeInLayout = function () {
		return b_MyMap_root.getIncludeInLayout();
	};


	MyMap.getInstanceIndex = function () {
		return b_MyMap_root.getInstanceIndex();
	};


	MyMap.getLayoutMatrix3D = function () {
		return b_MyMap_root.getLayoutMatrix3D();
	};


	MyMap.getScaleZ = function () {
		return b_MyMap_root.getScaleZ();
	};


	MyMap.getScaleZ = function () {
		return b_MyMap_root.getScaleZ();
	};


	MyMap.getDEFAULT_MEASURED_WIDTH = function () {
		return b_MyMap_root.getDEFAULT_MEASURED_WIDTH();
	};


	MyMap.getErrorString = function () {
		return b_MyMap_root.getErrorString();
	};


	MyMap.getErrorString = function () {
		return b_MyMap_root.getErrorString();
	};


	MyMap.getNestLevel = function () {
		return b_MyMap_root.getNestLevel();
	};


	MyMap.getNestLevel = function () {
		return b_MyMap_root.getNestLevel();
	};


	MyMap.getRepeaterIndex = function () {
		return b_MyMap_root.getRepeaterIndex();
	};


	MyMap.getUid = function () {
		return b_MyMap_root.getUid();
	};


	MyMap.getUid = function () {
		return b_MyMap_root.getUid();
	};


	MyMap.getBlendMode = function () {
		return b_MyMap_root.getBlendMode();
	};


	MyMap.getBlendMode = function () {
		return b_MyMap_root.getBlendMode();
	};


	MyMap.getTransformZ = function () {
		return b_MyMap_root.getTransformZ();
	};


	MyMap.getTransformZ = function () {
		return b_MyMap_root.getTransformZ();
	};


	MyMap.getTransformX = function () {
		return b_MyMap_root.getTransformX();
	};


	MyMap.getTransformX = function () {
		return b_MyMap_root.getTransformX();
	};


	MyMap.getTransformY = function () {
		return b_MyMap_root.getTransformY();
	};


	MyMap.getTransformY = function () {
		return b_MyMap_root.getTransformY();
	};


	MyMap.getAutomationValue = function () {
		return b_MyMap_root.getAutomationValue();
	};


	MyMap.getPercentHeight = function () {
		return b_MyMap_root.getPercentHeight();
	};


	MyMap.getPercentHeight = function () {
		return b_MyMap_root.getPercentHeight();
	};


	MyMap.getHorizontalCenter = function () {
		return b_MyMap_root.getHorizontalCenter();
	};


	MyMap.getHorizontalCenter = function () {
		return b_MyMap_root.getHorizontalCenter();
	};


	MyMap.getIs3D = function () {
		return b_MyMap_root.getIs3D();
	};


	MyMap.getDoubleClickEnabled = function () {
		return b_MyMap_root.getDoubleClickEnabled();
	};


	MyMap.getDoubleClickEnabled = function () {
		return b_MyMap_root.getDoubleClickEnabled();
	};


	MyMap.getPostLayoutTransformOffsets = function () {
		return b_MyMap_root.getPostLayoutTransformOffsets();
	};


	MyMap.getPostLayoutTransformOffsets = function () {
		return b_MyMap_root.getPostLayoutTransformOffsets();
	};


	MyMap.getAutomationName = function () {
		return b_MyMap_root.getAutomationName();
	};


	MyMap.getAutomationName = function () {
		return b_MyMap_root.getAutomationName();
	};


	MyMap.getModuleFactory = function () {
		return b_MyMap_root.getModuleFactory();
	};


	MyMap.getModuleFactory = function () {
		return b_MyMap_root.getModuleFactory();
	};


	MyMap.getInheritingStyles = function () {
		return b_MyMap_root.getInheritingStyles();
	};


	MyMap.getInheritingStyles = function () {
		return b_MyMap_root.getInheritingStyles();
	};


	MyMap.getExplicitMaxHeight = function () {
		return b_MyMap_root.getExplicitMaxHeight();
	};


	MyMap.getExplicitMaxHeight = function () {
		return b_MyMap_root.getExplicitMaxHeight();
	};


	MyMap.getScaleX = function () {
		return b_MyMap_root.getScaleX();
	};


	MyMap.getScaleX = function () {
		return b_MyMap_root.getScaleX();
	};


	MyMap.getScaleY = function () {
		return b_MyMap_root.getScaleY();
	};


	MyMap.getScaleY = function () {
		return b_MyMap_root.getScaleY();
	};


	MyMap.getOpaqueBackground = function () {
		return b_MyMap_root.getOpaqueBackground();
	};


	MyMap.getOpaqueBackground = function () {
		return b_MyMap_root.getOpaqueBackground();
	};


	MyMap.getVisible = function () {
		return b_MyMap_root.getVisible();
	};


	MyMap.getVisible = function () {
		return b_MyMap_root.getVisible();
	};


	MyMap.getBlendMode = function () {
		return b_MyMap_root.getBlendMode();
	};


	MyMap.getBlendMode = function () {
		return b_MyMap_root.getBlendMode();
	};


	MyMap.getRoot = function () {
		return b_MyMap_root.getRoot();
	};


	MyMap.getMask = function () {
		return b_MyMap_root.getMask();
	};


	MyMap.getMask = function () {
		return b_MyMap_root.getMask();
	};


	MyMap.getAccessibilityProperties = function () {
		return b_MyMap_root.getAccessibilityProperties();
	};


	MyMap.getAccessibilityProperties = function () {
		return b_MyMap_root.getAccessibilityProperties();
	};


	MyMap.getStage = function () {
		return b_MyMap_root.getStage();
	};


	MyMap.getMouseY = function () {
		return b_MyMap_root.getMouseY();
	};


	MyMap.getTransform = function () {
		return b_MyMap_root.getTransform();
	};


	MyMap.getTransform = function () {
		return b_MyMap_root.getTransform();
	};


	MyMap.getHeight = function () {
		return b_MyMap_root.getHeight();
	};


	MyMap.getHeight = function () {
		return b_MyMap_root.getHeight();
	};


	MyMap.getRotation = function () {
		return b_MyMap_root.getRotation();
	};


	MyMap.getRotation = function () {
		return b_MyMap_root.getRotation();
	};


	MyMap.getMouseX = function () {
		return b_MyMap_root.getMouseX();
	};


	MyMap.getName = function () {
		return b_MyMap_root.getName();
	};


	MyMap.getName = function () {
		return b_MyMap_root.getName();
	};


	MyMap.getAlpha = function () {
		return b_MyMap_root.getAlpha();
	};


	MyMap.getAlpha = function () {
		return b_MyMap_root.getAlpha();
	};


	MyMap.getRotationZ = function () {
		return b_MyMap_root.getRotationZ();
	};


	MyMap.getRotationZ = function () {
		return b_MyMap_root.getRotationZ();
	};


	MyMap.getRotationX = function () {
		return b_MyMap_root.getRotationX();
	};


	MyMap.getRotationX = function () {
		return b_MyMap_root.getRotationX();
	};


	MyMap.getScaleZ = function () {
		return b_MyMap_root.getScaleZ();
	};


	MyMap.getScaleZ = function () {
		return b_MyMap_root.getScaleZ();
	};


	MyMap.getRotationY = function () {
		return b_MyMap_root.getRotationY();
	};


	MyMap.getRotationY = function () {
		return b_MyMap_root.getRotationY();
	};


	MyMap.getScrollRect = function () {
		return b_MyMap_root.getScrollRect();
	};


	MyMap.getScrollRect = function () {
		return b_MyMap_root.getScrollRect();
	};


	MyMap.getWidth = function () {
		return b_MyMap_root.getWidth();
	};


	MyMap.getWidth = function () {
		return b_MyMap_root.getWidth();
	};


	MyMap.getParent = function () {
		return b_MyMap_root.getParent();
	};


	MyMap.getCacheAsBitmap = function () {
		return b_MyMap_root.getCacheAsBitmap();
	};


	MyMap.getCacheAsBitmap = function () {
		return b_MyMap_root.getCacheAsBitmap();
	};


	MyMap.getBlendShader = function () {
		return b_MyMap_root.getBlendShader();
	};


	MyMap.getLoaderInfo = function () {
		return b_MyMap_root.getLoaderInfo();
	};


	MyMap.getScale9Grid = function () {
		return b_MyMap_root.getScale9Grid();
	};


	MyMap.getScale9Grid = function () {
		return b_MyMap_root.getScale9Grid();
	};


	MyMap.getZ = function () {
		return b_MyMap_root.getZ();
	};


	MyMap.getZ = function () {
		return b_MyMap_root.getZ();
	};


	MyMap.getY = function () {
		return b_MyMap_root.getY();
	};


	MyMap.getY = function () {
		return b_MyMap_root.getY();
	};


	MyMap.getFilters = function () {
		return b_MyMap_root.getFilters();
	};


	MyMap.getFilters = function () {
		return b_MyMap_root.getFilters();
	};


	MyMap.getX = function () {
		return b_MyMap_root.getX();
	};


	MyMap.getX = function () {
		return b_MyMap_root.getX();
	};


	MyMap.getDeferredContentCreated = function () {
		return b_MyMap_root.getDeferredContentCreated();
	};


	MyMap.getMxmlContent = function () {
		return b_MyMap_root.getMxmlContent();
	};


	MyMap.getContentGroup = function () {
		return b_MyMap_root.getContentGroup();
	};


	MyMap.getContentGroup = function () {
		return b_MyMap_root.getContentGroup();
	};


	MyMap.getLayout = function () {
		return b_MyMap_root.getLayout();
	};


	MyMap.getLayout = function () {
		return b_MyMap_root.getLayout();
	};


	MyMap.getNumElements = function () {
		return b_MyMap_root.getNumElements();
	};


	MyMap.getMxmlContentFactory = function () {
		return b_MyMap_root.getMxmlContentFactory();
	};


	MyMap.getAutoLayout = function () {
		return b_MyMap_root.getAutoLayout();
	};


	MyMap.getAutoLayout = function () {
		return b_MyMap_root.getAutoLayout();
	};


	MyMap.getModuleFactory = function () {
		return b_MyMap_root.getModuleFactory();
	};


	MyMap.getCreationPolicy = function () {
		return b_MyMap_root.getCreationPolicy();
	};


	MyMap.getCreationPolicy = function () {
		return b_MyMap_root.getCreationPolicy();
	};


	// Global functions in the "MyMap.mxml" application

	MyMap.isPrototypeOf = function(arg) {
		return b_MyMap_root.isPrototypeOf(arg);
	};

	MyMap.hasOwnProperty = function(arg) {
		return b_MyMap_root.hasOwnProperty(arg);
	};

	MyMap.propertyIsEnumerable = function(arg) {
		return b_MyMap_root.propertyIsEnumerable(arg);
	};

	MyMap._init = function() {
		return b_MyMap_root._init();
	};

	MyMap.accessibilityImplementation = function() {
		return b_MyMap_root.accessibilityImplementation();
	};

	MyMap.accessibilityImplementation = function(argFlash.accessibility.AccessibilityImplementation) {
		b_MyMap_root.accessibilityImplementation(argFlash.accessibility.AccessibilityImplementation);
	};

	MyMap.doubleClickEnabled = function() {
		return b_MyMap_root.doubleClickEnabled();
	};

	MyMap.doubleClickEnabled = function(argBoolean) {
		b_MyMap_root.doubleClickEnabled(argBoolean);
	};

	MyMap.contextMenu = function() {
		return b_MyMap_root.contextMenu();
	};

	MyMap.contextMenu = function(argFlash.ui.ContextMenu) {
		b_MyMap_root.contextMenu(argFlash.ui.ContextMenu);
	};

	MyMap.tabEnabled = function() {
		return b_MyMap_root.tabEnabled();
	};

	MyMap.tabEnabled = function(argBoolean) {
		b_MyMap_root.tabEnabled(argBoolean);
	};

	MyMap.softKeyboardInputAreaOfInterest = function() {
		return b_MyMap_root.softKeyboardInputAreaOfInterest();
	};

	MyMap.softKeyboardInputAreaOfInterest = function(argFlash.geom.Rectangle) {
		b_MyMap_root.softKeyboardInputAreaOfInterest(argFlash.geom.Rectangle);
	};

	MyMap.tabIndex = function() {
		return b_MyMap_root.tabIndex();
	};

	MyMap.tabIndex = function(argInt) {
		b_MyMap_root.tabIndex(argInt);
	};

	MyMap.mouseEnabled = function() {
		return b_MyMap_root.mouseEnabled();
	};

	MyMap.mouseEnabled = function(argBoolean) {
		b_MyMap_root.mouseEnabled(argBoolean);
	};

	MyMap.focusRect = function() {
		return b_MyMap_root.focusRect();
	};

	MyMap.focusRect = function(argObject) {
		b_MyMap_root.focusRect(argObject);
	};

	MyMap.needsSoftKeyboard = function() {
		return b_MyMap_root.needsSoftKeyboard();
	};

	MyMap.needsSoftKeyboard = function(argBoolean) {
		b_MyMap_root.needsSoftKeyboard(argBoolean);
	};

	MyMap.requestSoftKeyboard = function() {
		return b_MyMap_root.requestSoftKeyboard();
	};

	MyMap.willTrigger = function(argString) {
		return b_MyMap_root.willTrigger(argString);
	};

	MyMap.addEventListener = function(argString, argFunction, argBoolean1, argInt, argBoolean2) {
		b_MyMap_root.addEventListener(argString, argFunction, argBoolean1, argInt, argBoolean2);
	};

	MyMap.dispatchEvent = function(argFlash.events.Event) {
		return b_MyMap_root.dispatchEvent(argFlash.events.Event);
	};

	MyMap.removeEventListener = function(argString, argFunction, argBoolean) {
		b_MyMap_root.removeEventListener(argString, argFunction, argBoolean);
	};

	MyMap.toString = function() {
		return b_MyMap_root.toString();
	};

	MyMap.hasEventListener = function(argString) {
		return b_MyMap_root.hasEventListener(argString);
	};

	MyMap.mouseChildren = function(argBoolean) {
		b_MyMap_root.mouseChildren(argBoolean);
	};

	MyMap.addChildAt = function(argFlash.display.DisplayObject, argInt) {
		return b_MyMap_root.addChildAt(argFlash.display.DisplayObject, argInt);
	};

	MyMap.skin = function() {
		return b_MyMap_root.skin();
	};

	MyMap.swapChildrenAt = function(argInt1, argInt2) {
		b_MyMap_root.swapChildrenAt(argInt1, argInt2);
	};

	MyMap.swapChildren = function(argFlash.display.DisplayObject1, argFlash.display.DisplayObject2) {
		b_MyMap_root.swapChildren(argFlash.display.DisplayObject1, argFlash.display.DisplayObject2);
	};

	MyMap.enabled = function(argBoolean) {
		b_MyMap_root.enabled(argBoolean);
	};

	MyMap.drawFocus = function(argBoolean) {
		b_MyMap_root.drawFocus(argBoolean);
	};

	MyMap.styleChanged = function(argString) {
		b_MyMap_root.styleChanged(argString);
	};

	MyMap.mouseEnabled = function(argBoolean) {
		b_MyMap_root.mouseEnabled(argBoolean);
	};

	MyMap.suggestedFocusSkinExclusions = function() {
		return b_MyMap_root.suggestedFocusSkinExclusions();
	};

	MyMap.invalidateSkinState = function() {
		b_MyMap_root.invalidateSkinState();
	};

	MyMap.removeChild = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.removeChild(argFlash.display.DisplayObject);
	};

	MyMap.addChild = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.addChild(argFlash.display.DisplayObject);
	};

	MyMap.matchesCSSState = function(argString) {
		return b_MyMap_root.matchesCSSState(argString);
	};

	MyMap.removeChildAt = function(argInt) {
		return b_MyMap_root.removeChildAt(argInt);
	};

	MyMap.baselinePosition = function() {
		return b_MyMap_root.baselinePosition();
	};

	MyMap.setChildIndex = function(argFlash.display.DisplayObject, argInt) {
		b_MyMap_root.setChildIndex(argFlash.display.DisplayObject, argInt);
	};

	MyMap.errorString = function(argString) {
		b_MyMap_root.errorString(argString);
	};

	MyMap.mouseChildren = function() {
		return b_MyMap_root.mouseChildren();
	};

	MyMap.mouseChildren = function(argBoolean) {
		b_MyMap_root.mouseChildren(argBoolean);
	};

	MyMap.getChildIndex = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.getChildIndex(argFlash.display.DisplayObject);
	};

	MyMap.removeChildren = function(argInt1, argInt2) {
		b_MyMap_root.removeChildren(argInt1, argInt2);
	};

	MyMap.contains = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.contains(argFlash.display.DisplayObject);
	};

	MyMap.setChildIndex = function(argFlash.display.DisplayObject, argInt) {
		b_MyMap_root.setChildIndex(argFlash.display.DisplayObject, argInt);
	};

	MyMap.getObjectsUnderPoint = function(argFlash.geom.Point) {
		return b_MyMap_root.getObjectsUnderPoint(argFlash.geom.Point);
	};

	MyMap.areInaccessibleObjectsUnderPoint = function(argFlash.geom.Point) {
		return b_MyMap_root.areInaccessibleObjectsUnderPoint(argFlash.geom.Point);
	};

	MyMap.addChildAt = function(argFlash.display.DisplayObject, argInt) {
		return b_MyMap_root.addChildAt(argFlash.display.DisplayObject, argInt);
	};

	MyMap.removeChildAt = function(argInt) {
		return b_MyMap_root.removeChildAt(argInt);
	};

	MyMap.removeChild = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.removeChild(argFlash.display.DisplayObject);
	};

	MyMap.swapChildrenAt = function(argInt1, argInt2) {
		b_MyMap_root.swapChildrenAt(argInt1, argInt2);
	};

	MyMap.getChildByName = function(argString) {
		return b_MyMap_root.getChildByName(argString);
	};

	MyMap.tabChildren = function() {
		return b_MyMap_root.tabChildren();
	};

	MyMap.tabChildren = function(argBoolean) {
		b_MyMap_root.tabChildren(argBoolean);
	};

	MyMap.addChild = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.addChild(argFlash.display.DisplayObject);
	};

	MyMap.swapChildren = function(argFlash.display.DisplayObject1, argFlash.display.DisplayObject2) {
		b_MyMap_root.swapChildren(argFlash.display.DisplayObject1, argFlash.display.DisplayObject2);
	};

	MyMap.getChildAt = function(argInt) {
		return b_MyMap_root.getChildAt(argInt);
	};

	MyMap.numChildren = function() {
		return b_MyMap_root.numChildren();
	};

	MyMap.textSnapshot = function() {
		return b_MyMap_root.textSnapshot();
	};

	MyMap.buttonMode = function() {
		return b_MyMap_root.buttonMode();
	};

	MyMap.buttonMode = function(argBoolean) {
		b_MyMap_root.buttonMode(argBoolean);
	};

	MyMap.soundTransform = function() {
		return b_MyMap_root.soundTransform();
	};

	MyMap.soundTransform = function(argFlash.media.SoundTransform) {
		b_MyMap_root.soundTransform(argFlash.media.SoundTransform);
	};

	MyMap.useHandCursor = function() {
		return b_MyMap_root.useHandCursor();
	};

	MyMap.useHandCursor = function(argBoolean) {
		b_MyMap_root.useHandCursor(argBoolean);
	};

	MyMap.stopTouchDrag = function(argInt) {
		b_MyMap_root.stopTouchDrag(argInt);
	};

	MyMap.startTouchDrag = function(argInt, argBoolean, argFlash.geom.Rectangle) {
		b_MyMap_root.startTouchDrag(argInt, argBoolean, argFlash.geom.Rectangle);
	};

	MyMap.dropTarget = function() {
		return b_MyMap_root.dropTarget();
	};

	MyMap.graphics = function() {
		return b_MyMap_root.graphics();
	};

	MyMap.startDrag = function(argBoolean, argFlash.geom.Rectangle) {
		b_MyMap_root.startDrag(argBoolean, argFlash.geom.Rectangle);
	};

	MyMap.stopDrag = function() {
		b_MyMap_root.stopDrag();
	};

	MyMap.hitArea = function() {
		return b_MyMap_root.hitArea();
	};

	MyMap.hitArea = function(argFlash.display.Sprite) {
		b_MyMap_root.hitArea(argFlash.display.Sprite);
	};

	MyMap.defaultButton = function() {
		return b_MyMap_root.defaultButton();
	};

	MyMap.defaultButton = function(argMx.core.IFlexDisplayObject) {
		b_MyMap_root.defaultButton(argMx.core.IFlexDisplayObject);
	};

	MyMap.toString = function() {
		return b_MyMap_root.toString();
	};

	MyMap.tabIndex = function(argInt) {
		b_MyMap_root.tabIndex(argInt);
	};

	MyMap.parameters = function() {
		return b_MyMap_root.parameters();
	};

	MyMap.initialize = function() {
		b_MyMap_root.initialize();
	};

	MyMap.runtimeDPIProvider = function() {
		return b_MyMap_root.runtimeDPIProvider();
	};

	MyMap.runtimeDPIProvider = function(argClass) {
		b_MyMap_root.runtimeDPIProvider(argClass);
	};

	MyMap.styleChanged = function(argString) {
		b_MyMap_root.styleChanged(argString);
	};

	MyMap.controlBarLayout = function() {
		return b_MyMap_root.controlBarLayout();
	};

	MyMap.controlBarLayout = function(argSpark.layouts.supportClasses.LayoutBase) {
		b_MyMap_root.controlBarLayout(argSpark.layouts.supportClasses.LayoutBase);
	};

	MyMap.controlBarVisible = function() {
		return b_MyMap_root.controlBarVisible();
	};

	MyMap.controlBarVisible = function(argBoolean) {
		b_MyMap_root.controlBarVisible(argBoolean);
	};

	MyMap.url = function() {
		return b_MyMap_root.url();
	};

	MyMap.percentHeight = function(argNumber) {
		b_MyMap_root.percentHeight(argNumber);
	};

	MyMap.resizeForSoftKeyboard = function() {
		return b_MyMap_root.resizeForSoftKeyboard();
	};

	MyMap.resizeForSoftKeyboard = function(argBoolean) {
		b_MyMap_root.resizeForSoftKeyboard(argBoolean);
	};

	MyMap.applicationDPI = function() {
		return b_MyMap_root.applicationDPI();
	};

	MyMap.applicationDPI = function(argNumber) {
		b_MyMap_root.applicationDPI(argNumber);
	};

	MyMap.addEventListener = function(argString, argFunction, argBoolean1, argInt, argBoolean2) {
		b_MyMap_root.addEventListener(argString, argFunction, argBoolean1, argInt, argBoolean2);
	};

	MyMap.removeEventListener = function(argString, argFunction, argBoolean) {
		b_MyMap_root.removeEventListener(argString, argFunction, argBoolean);
	};

	MyMap.aspectRatio = function() {
		return b_MyMap_root.aspectRatio();
	};

	MyMap.id = function() {
		return b_MyMap_root.id();
	};

	MyMap.controlBarContent = function() {
		return b_MyMap_root.controlBarContent();
	};

	MyMap.controlBarContent = function(argArray) {
		b_MyMap_root.controlBarContent(argArray);
	};

	MyMap.viewSourceURL = function() {
		return b_MyMap_root.viewSourceURL();
	};

	MyMap.viewSourceURL = function(argString) {
		b_MyMap_root.viewSourceURL(argString);
	};

	MyMap.colorCorrection = function() {
		return b_MyMap_root.colorCorrection();
	};

	MyMap.colorCorrection = function(argString) {
		b_MyMap_root.colorCorrection(argString);
	};

	MyMap.splashScreenImage = function() {
		return b_MyMap_root.splashScreenImage();
	};

	MyMap.splashScreenImage = function(argClass) {
		b_MyMap_root.splashScreenImage(argClass);
	};

	MyMap.toolTip = function(argString) {
		b_MyMap_root.toolTip(argString);
	};

	MyMap.percentWidth = function(argNumber) {
		b_MyMap_root.percentWidth(argNumber);
	};

	MyMap.runtimeDPI = function() {
		return b_MyMap_root.runtimeDPI();
	};

	MyMap.cacheHeuristic = function(argBoolean) {
		b_MyMap_root.cacheHeuristic(argBoolean);
	};

	MyMap.resumeBackgroundProcessing = function() {
		b_MyMap_root.resumeBackgroundProcessing();
	};

	MyMap.hasCSSState = function() {
		return b_MyMap_root.hasCSSState();
	};

	MyMap.right = function() {
		return b_MyMap_root.right();
	};

	MyMap.right = function(argObject) {
		b_MyMap_root.right(argObject);
	};

	MyMap.getPreferredBoundsHeight = function(argBoolean) {
		return b_MyMap_root.getPreferredBoundsHeight(argBoolean);
	};

	MyMap.localToContent = function(argFlash.geom.Point) {
		return b_MyMap_root.localToContent(argFlash.geom.Point);
	};

	MyMap.hasState = function(argString) {
		return b_MyMap_root.hasState(argString);
	};

	MyMap.explicitHeight = function() {
		return b_MyMap_root.explicitHeight();
	};

	MyMap.explicitHeight = function(argNumber) {
		b_MyMap_root.explicitHeight(argNumber);
	};

	MyMap.notifyStyleChangeInChildren = function(argString, argBoolean) {
		b_MyMap_root.notifyStyleChangeInChildren(argString, argBoolean);
	};

	MyMap.drawFocus = function(argBoolean) {
		b_MyMap_root.drawFocus(argBoolean);
	};

	MyMap.getExplicitOrMeasuredWidth = function() {
		return b_MyMap_root.getExplicitOrMeasuredWidth();
	};

	MyMap.parent = function() {
		return b_MyMap_root.parent();
	};

	MyMap.cacheAsBitmap = function(argBoolean) {
		b_MyMap_root.cacheAsBitmap(argBoolean);
	};

	MyMap.removeChild = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.removeChild(argFlash.display.DisplayObject);
	};

	MyMap.minHeight = function() {
		return b_MyMap_root.minHeight();
	};

	MyMap.minHeight = function(argNumber) {
		b_MyMap_root.minHeight(argNumber);
	};

	MyMap.focusPane = function() {
		return b_MyMap_root.focusPane();
	};

	MyMap.focusPane = function(argFlash.display.Sprite) {
		b_MyMap_root.focusPane(argFlash.display.Sprite);
	};

	MyMap.addChild = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.addChild(argFlash.display.DisplayObject);
	};

	MyMap.getBoundsYAtSize = function(argNumber1, argNumber2, argBoolean) {
		return b_MyMap_root.getBoundsYAtSize(argNumber1, argNumber2, argBoolean);
	};

	MyMap.hasLayoutMatrix3D = function() {
		return b_MyMap_root.hasLayoutMatrix3D();
	};

	MyMap.accessibilityShortcut = function() {
		return b_MyMap_root.accessibilityShortcut();
	};

	MyMap.accessibilityShortcut = function(argString) {
		b_MyMap_root.accessibilityShortcut(argString);
	};

	MyMap.explicitWidth = function() {
		return b_MyMap_root.explicitWidth();
	};

	MyMap.explicitWidth = function(argNumber) {
		b_MyMap_root.explicitWidth(argNumber);
	};

	MyMap.measuredWidth = function() {
		return b_MyMap_root.measuredWidth();
	};

	MyMap.measuredWidth = function(argNumber) {
		b_MyMap_root.measuredWidth(argNumber);
	};

	MyMap.transform = function() {
		return b_MyMap_root.transform();
	};

	MyMap.transform = function(argFlash.geom.Transform) {
		b_MyMap_root.transform(argFlash.geom.Transform);
	};

	MyMap.baselinePosition = function() {
		return b_MyMap_root.baselinePosition();
	};

	MyMap.automationTabularData = function() {
		return b_MyMap_root.automationTabularData();
	};

	MyMap.validationResultHandler = function(argMx.events.ValidationResultEvent) {
		b_MyMap_root.validationResultHandler(argMx.events.ValidationResultEvent);
	};

	MyMap.left = function() {
		return b_MyMap_root.left();
	};

	MyMap.left = function(argObject) {
		b_MyMap_root.left(argObject);
	};

	MyMap.baseline = function() {
		return b_MyMap_root.baseline();
	};

	MyMap.baseline = function(argObject) {
		b_MyMap_root.baseline(argObject);
	};

	MyMap.invalidateSize = function() {
		b_MyMap_root.invalidateSize();
	};

	MyMap.toolTip = function() {
		return b_MyMap_root.toolTip();
	};

	MyMap.toolTip = function(argString) {
		b_MyMap_root.toolTip(argString);
	};

	MyMap.getClassStyleDeclarations = function() {
		return b_MyMap_root.getClassStyleDeclarations();
	};

	MyMap.getStyle = function(argString) {
		return b_MyMap_root.getStyle(argString);
	};

	MyMap.setLayoutMatrix3D = function(argFlash.geom.Matrix3D, argBoolean) {
		b_MyMap_root.setLayoutMatrix3D(argFlash.geom.Matrix3D, argBoolean);
	};

	MyMap.automationOwner = function() {
		return b_MyMap_root.automationOwner();
	};

	MyMap.parentApplication = function() {
		return b_MyMap_root.parentApplication();
	};

	MyMap.z = function() {
		return b_MyMap_root.z();
	};

	MyMap.z = function(argNumber) {
		b_MyMap_root.z(argNumber);
	};

	MyMap.y = function() {
		return b_MyMap_root.y();
	};

	MyMap.y = function(argNumber) {
		b_MyMap_root.y(argNumber);
	};

	MyMap.x = function() {
		return b_MyMap_root.x();
	};

	MyMap.x = function(argNumber) {
		b_MyMap_root.x(argNumber);
	};

	MyMap.visible = function() {
		return b_MyMap_root.visible();
	};

	MyMap.visible = function(argBoolean) {
		b_MyMap_root.visible(argBoolean);
	};

	MyMap.numAutomationChildren = function() {
		return b_MyMap_root.numAutomationChildren();
	};

	MyMap.finishPrint = function(argObject, argMx.core.IFlexDisplayObject) {
		b_MyMap_root.finishPrint(argObject, argMx.core.IFlexDisplayObject);
	};

	MyMap.height = function() {
		return b_MyMap_root.height();
	};

	MyMap.height = function(argNumber) {
		b_MyMap_root.height(argNumber);
	};

	MyMap.parentChanged = function(argFlash.display.DisplayObjectContainer) {
		b_MyMap_root.parentChanged(argFlash.display.DisplayObjectContainer);
	};

	MyMap.maxWidth = function() {
		return b_MyMap_root.maxWidth();
	};

	MyMap.maxWidth = function(argNumber) {
		b_MyMap_root.maxWidth(argNumber);
	};

	MyMap.initialize = function() {
		b_MyMap_root.initialize();
	};

	MyMap.measuredMinWidth = function() {
		return b_MyMap_root.measuredMinWidth();
	};

	MyMap.measuredMinWidth = function(argNumber) {
		b_MyMap_root.measuredMinWidth(argNumber);
	};

	MyMap.suspendBackgroundProcessing = function() {
		b_MyMap_root.suspendBackgroundProcessing();
	};

	MyMap.drawRoundRect = function(argNumber1, argNumber2, argNumber3, argNumber4, argObject5, argObject6, argObject7, argObject8, argString, argArray, argObject9) {
		b_MyMap_root.drawRoundRect(argNumber1, argNumber2, argNumber3, argNumber4, argObject5, argObject6, argObject7, argObject8, argString, argArray, argObject9);
	};

	MyMap.getLayoutBoundsY = function(argBoolean) {
		return b_MyMap_root.getLayoutBoundsY(argBoolean);
	};

	MyMap.getLayoutBoundsX = function(argBoolean) {
		return b_MyMap_root.getLayoutBoundsX(argBoolean);
	};

	MyMap.activeEffects = function() {
		return b_MyMap_root.activeEffects();
	};

	MyMap.cursorManager = function() {
		return b_MyMap_root.cursorManager();
	};

	MyMap.dispatchEvent = function(argFlash.events.Event) {
		return b_MyMap_root.dispatchEvent(argFlash.events.Event);
	};

	MyMap.alpha = function() {
		return b_MyMap_root.alpha();
	};

	MyMap.alpha = function(argNumber) {
		b_MyMap_root.alpha(argNumber);
	};

	MyMap.tweeningProperties = function() {
		return b_MyMap_root.tweeningProperties();
	};

	MyMap.tweeningProperties = function(argArray) {
		b_MyMap_root.tweeningProperties(argArray);
	};

	MyMap.explicitMinWidth = function() {
		return b_MyMap_root.explicitMinWidth();
	};

	MyMap.explicitMinWidth = function(argNumber) {
		b_MyMap_root.explicitMinWidth(argNumber);
	};

	MyMap.setFocus = function() {
		b_MyMap_root.setFocus();
	};

	MyMap.verticalCenter = function() {
		return b_MyMap_root.verticalCenter();
	};

	MyMap.verticalCenter = function(argObject) {
		b_MyMap_root.verticalCenter(argObject);
	};

	MyMap.regenerateStyleCache = function(argBoolean) {
		b_MyMap_root.regenerateStyleCache(argBoolean);
	};

	MyMap.percentWidth = function() {
		return b_MyMap_root.percentWidth();
	};

	MyMap.percentWidth = function(argNumber) {
		b_MyMap_root.percentWidth(argNumber);
	};

	MyMap.getLayoutMatrix3D = function() {
		return b_MyMap_root.getLayoutMatrix3D();
	};

	MyMap.measureText = function(argString) {
		return b_MyMap_root.measureText(argString);
	};

	MyMap.setLayoutBoundsSize = function(argNumber1, argNumber2, argBoolean) {
		b_MyMap_root.setLayoutBoundsSize(argNumber1, argNumber2, argBoolean);
	};

	MyMap.updateCompletePendingFlag = function() {
		return b_MyMap_root.updateCompletePendingFlag();
	};

	MyMap.updateCompletePendingFlag = function(argBoolean) {
		b_MyMap_root.updateCompletePendingFlag(argBoolean);
	};

	MyMap.rotation = function() {
		return b_MyMap_root.rotation();
	};

	MyMap.rotation = function(argNumber) {
		b_MyMap_root.rotation(argNumber);
	};

	MyMap.move = function(argNumber1, argNumber2) {
		b_MyMap_root.move(argNumber1, argNumber2);
	};

	MyMap.screen = function() {
		return b_MyMap_root.screen();
	};

	MyMap.styleChanged = function(argString) {
		b_MyMap_root.styleChanged(argString);
	};

	MyMap.transformAround = function(argFlash.geom.Vector3D1, argFlash.geom.Vector3D2, argFlash.geom.Vector3D3, argFlash.geom.Vector3D4, argFlash.geom.Vector3D5, argFlash.geom.Vector3D6, argFlash.geom.Vector3D7, argBoolean) {
		b_MyMap_root.transformAround(argFlash.geom.Vector3D1, argFlash.geom.Vector3D2, argFlash.geom.Vector3D3, argFlash.geom.Vector3D4, argFlash.geom.Vector3D5, argFlash.geom.Vector3D6, argFlash.geom.Vector3D7, argBoolean);
	};

	MyMap.createReferenceOnParentDocument = function(argMx.core.IFlexDisplayObject) {
		b_MyMap_root.createReferenceOnParentDocument(argMx.core.IFlexDisplayObject);
	};

	MyMap.getAutomationChildAt = function(argInt) {
		return b_MyMap_root.getAutomationChildAt(argInt);
	};

	MyMap.setCurrentState = function(argString, argBoolean) {
		b_MyMap_root.setCurrentState(argString, argBoolean);
	};

	MyMap.filters = function() {
		return b_MyMap_root.filters();
	};

	MyMap.filters = function(argArray) {
		b_MyMap_root.filters(argArray);
	};

	MyMap.flexContextMenu = function() {
		return b_MyMap_root.flexContextMenu();
	};

	MyMap.flexContextMenu = function(argMx.controls.IFlexContextMenu) {
		b_MyMap_root.flexContextMenu(argMx.controls.IFlexContextMenu);
	};

	MyMap.descriptor = function() {
		return b_MyMap_root.descriptor();
	};

	MyMap.descriptor = function(argMx.core.UIComponentDescriptor) {
		b_MyMap_root.descriptor(argMx.core.UIComponentDescriptor);
	};

	MyMap.accessibilityName = function() {
		return b_MyMap_root.accessibilityName();
	};

	MyMap.accessibilityName = function(argString) {
		b_MyMap_root.accessibilityName(argString);
	};

	MyMap.currentState = function() {
		return b_MyMap_root.currentState();
	};

	MyMap.currentState = function(argString) {
		b_MyMap_root.currentState(argString);
	};

	MyMap.contentMouseX = function() {
		return b_MyMap_root.contentMouseX();
	};

	MyMap.contentMouseY = function() {
		return b_MyMap_root.contentMouseY();
	};

	MyMap.validateDisplayList = function() {
		b_MyMap_root.validateDisplayList();
	};

	MyMap.contentToGlobal = function(argFlash.geom.Point) {
		return b_MyMap_root.contentToGlobal(argFlash.geom.Point);
	};

	MyMap.tabFocusEnabled = function() {
		return b_MyMap_root.tabFocusEnabled();
	};

	MyMap.tabFocusEnabled = function(argBoolean) {
		b_MyMap_root.tabFocusEnabled(argBoolean);
	};

	MyMap.explicitMinHeight = function() {
		return b_MyMap_root.explicitMinHeight();
	};

	MyMap.explicitMinHeight = function(argNumber) {
		b_MyMap_root.explicitMinHeight(argNumber);
	};

	MyMap.focusEnabled = function() {
		return b_MyMap_root.focusEnabled();
	};

	MyMap.focusEnabled = function(argBoolean) {
		b_MyMap_root.focusEnabled(argBoolean);
	};

	MyMap.getLayoutBoundsWidth = function(argBoolean) {
		return b_MyMap_root.getLayoutBoundsWidth(argBoolean);
	};

	MyMap.getMinBoundsWidth = function(argBoolean) {
		return b_MyMap_root.getMinBoundsWidth(argBoolean);
	};

	MyMap.minWidth = function() {
		return b_MyMap_root.minWidth();
	};

	MyMap.minWidth = function(argNumber) {
		b_MyMap_root.minWidth(argNumber);
	};

	MyMap.accessibilityDescription = function() {
		return b_MyMap_root.accessibilityDescription();
	};

	MyMap.accessibilityDescription = function(argString) {
		b_MyMap_root.accessibilityDescription(argString);
	};

	MyMap.transformPointToParent = function(argFlash.geom.Vector3D1, argFlash.geom.Vector3D2, argFlash.geom.Vector3D3) {
		b_MyMap_root.transformPointToParent(argFlash.geom.Vector3D1, argFlash.geom.Vector3D2, argFlash.geom.Vector3D3);
	};

	MyMap.createAutomationIDPartWithRequiredProperties = function(argMx.automation.IAutomationObject, argArray) {
		return b_MyMap_root.createAutomationIDPartWithRequiredProperties(argMx.automation.IAutomationObject, argArray);
	};

	MyMap.depth = function() {
		return b_MyMap_root.depth();
	};

	MyMap.depth = function(argNumber) {
		b_MyMap_root.depth(argNumber);
	};

	MyMap.styleName = function() {
		return b_MyMap_root.styleName();
	};

	MyMap.styleName = function(argObject) {
		b_MyMap_root.styleName(argObject);
	};

	MyMap.styleManager = function() {
		return b_MyMap_root.styleManager();
	};

	MyMap.invalidateProperties = function() {
		b_MyMap_root.invalidateProperties();
	};

	MyMap.invalidateLayering = function() {
		b_MyMap_root.invalidateLayering();
	};

	MyMap.maxHeight = function() {
		return b_MyMap_root.maxHeight();
	};

	MyMap.maxHeight = function(argNumber) {
		b_MyMap_root.maxHeight(argNumber);
	};

	MyMap.owner = function() {
		return b_MyMap_root.owner();
	};

	MyMap.owner = function(argFlash.display.DisplayObjectContainer) {
		b_MyMap_root.owner(argFlash.display.DisplayObjectContainer);
	};

	MyMap.nonInheritingStyles = function() {
		return b_MyMap_root.nonInheritingStyles();
	};

	MyMap.nonInheritingStyles = function(argObject) {
		b_MyMap_root.nonInheritingStyles(argObject);
	};

	MyMap.contentToLocal = function(argFlash.geom.Point) {
		return b_MyMap_root.contentToLocal(argFlash.geom.Point);
	};

	MyMap.id = function() {
		return b_MyMap_root.id();
	};

	MyMap.id = function(argString) {
		b_MyMap_root.id(argString);
	};

	MyMap.prepareToPrint = function(argMx.core.IFlexDisplayObject) {
		return b_MyMap_root.prepareToPrint(argMx.core.IFlexDisplayObject);
	};

	MyMap.callLater = function(argFunction, argArray) {
		b_MyMap_root.callLater(argFunction, argArray);
	};

	MyMap.getPreferredBoundsWidth = function(argBoolean) {
		return b_MyMap_root.getPreferredBoundsWidth(argBoolean);
	};

	MyMap.validateSize = function(argBoolean) {
		b_MyMap_root.validateSize(argBoolean);
	};

	MyMap.explicitMaxWidth = function() {
		return b_MyMap_root.explicitMaxWidth();
	};

	MyMap.explicitMaxWidth = function(argNumber) {
		b_MyMap_root.explicitMaxWidth(argNumber);
	};

	MyMap.setChildIndex = function(argFlash.display.DisplayObject, argInt) {
		b_MyMap_root.setChildIndex(argFlash.display.DisplayObject, argInt);
	};

	MyMap.isPopUp = function() {
		return b_MyMap_root.isPopUp();
	};

	MyMap.isPopUp = function(argBoolean) {
		b_MyMap_root.isPopUp(argBoolean);
	};

	MyMap.registerEffects = function(argArray) {
		b_MyMap_root.registerEffects(argArray);
	};

	MyMap.setStyle = function(argString, arg) {
		b_MyMap_root.setStyle(argString, arg);
	};

	MyMap.instanceIndices = function() {
		return b_MyMap_root.instanceIndices();
	};

	MyMap.instanceIndices = function(argArray) {
		b_MyMap_root.instanceIndices(argArray);
	};

	MyMap.replayAutomatableEvent = function(argFlash.events.Event) {
		return b_MyMap_root.replayAutomatableEvent(argFlash.events.Event);
	};

	MyMap.invalidateDisplayList = function() {
		b_MyMap_root.invalidateDisplayList();
	};

	MyMap.getLayoutMatrix = function() {
		return b_MyMap_root.getLayoutMatrix();
	};

	MyMap.getMaxBoundsWidth = function(argBoolean) {
		return b_MyMap_root.getMaxBoundsWidth(argBoolean);
	};

	MyMap.initializeRepeaterArrays = function(argMx.core.IRepeaterClient) {
		b_MyMap_root.initializeRepeaterArrays(argMx.core.IRepeaterClient);
	};

	MyMap.repeaterIndices = function() {
		return b_MyMap_root.repeaterIndices();
	};

	MyMap.repeaterIndices = function(argArray) {
		b_MyMap_root.repeaterIndices(argArray);
	};

	MyMap.validateProperties = function() {
		b_MyMap_root.validateProperties();
	};

	MyMap.designLayer = function() {
		return b_MyMap_root.designLayer();
	};

	MyMap.designLayer = function(argMx.core.DesignLayer) {
		b_MyMap_root.designLayer(argMx.core.DesignLayer);
	};

	MyMap.bottom = function() {
		return b_MyMap_root.bottom();
	};

	MyMap.bottom = function(argObject) {
		b_MyMap_root.bottom(argObject);
	};

	MyMap.layoutDirection = function() {
		return b_MyMap_root.layoutDirection();
	};

	MyMap.layoutDirection = function(argString) {
		b_MyMap_root.layoutDirection(argString);
	};

	MyMap.repeaters = function() {
		return b_MyMap_root.repeaters();
	};

	MyMap.repeaters = function(argArray) {
		b_MyMap_root.repeaters(argArray);
	};

	MyMap.owns = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.owns(argFlash.display.DisplayObject);
	};

	MyMap.focusManager = function() {
		return b_MyMap_root.focusManager();
	};

	MyMap.focusManager = function(argMx.managers.IFocusManager) {
		b_MyMap_root.focusManager(argMx.managers.IFocusManager);
	};

	MyMap.parentDocument = function() {
		return b_MyMap_root.parentDocument();
	};

	MyMap.processedDescriptors = function() {
		return b_MyMap_root.processedDescriptors();
	};

	MyMap.processedDescriptors = function(argBoolean) {
		b_MyMap_root.processedDescriptors(argBoolean);
	};

	MyMap.automationVisible = function() {
		return b_MyMap_root.automationVisible();
	};

	MyMap.states = function() {
		return b_MyMap_root.states();
	};

	MyMap.states = function(argArray) {
		b_MyMap_root.states(argArray);
	};

	MyMap.showInAutomationHierarchy = function() {
		return b_MyMap_root.showInAutomationHierarchy();
	};

	MyMap.showInAutomationHierarchy = function(argBoolean) {
		b_MyMap_root.showInAutomationHierarchy(argBoolean);
	};

	MyMap.document = function() {
		return b_MyMap_root.document();
	};

	MyMap.document = function(argObject) {
		b_MyMap_root.document(argObject);
	};

	MyMap.executeBindings = function(argBoolean) {
		b_MyMap_root.executeBindings(argBoolean);
	};

	MyMap.getFocus = function() {
		return b_MyMap_root.getFocus();
	};

	MyMap.setActualSize = function(argNumber1, argNumber2) {
		b_MyMap_root.setActualSize(argNumber1, argNumber2);
	};

	MyMap.getMinBoundsHeight = function(argBoolean) {
		return b_MyMap_root.getMinBoundsHeight(argBoolean);
	};

	MyMap.getConstraintValue = function(argString) {
		return b_MyMap_root.getConstraintValue(argString);
	};

	MyMap.stopDrag = function() {
		b_MyMap_root.stopDrag();
	};

	MyMap.measuredMinHeight = function() {
		return b_MyMap_root.measuredMinHeight();
	};

	MyMap.measuredMinHeight = function(argNumber) {
		b_MyMap_root.measuredMinHeight(argNumber);
	};

	MyMap.globalToContent = function(argFlash.geom.Point) {
		return b_MyMap_root.globalToContent(argFlash.geom.Point);
	};

	MyMap.mouseFocusEnabled = function() {
		return b_MyMap_root.mouseFocusEnabled();
	};

	MyMap.mouseFocusEnabled = function(argBoolean) {
		b_MyMap_root.mouseFocusEnabled(argBoolean);
	};

	MyMap.measuredHeight = function() {
		return b_MyMap_root.measuredHeight();
	};

	MyMap.measuredHeight = function(argNumber) {
		b_MyMap_root.measuredHeight(argNumber);
	};

	MyMap.isDocument = function() {
		return b_MyMap_root.isDocument();
	};

	MyMap.addChildAt = function(argFlash.display.DisplayObject, argInt) {
		return b_MyMap_root.addChildAt(argFlash.display.DisplayObject, argInt);
	};

	MyMap.styleParent = function() {
		return b_MyMap_root.styleParent();
	};

	MyMap.styleParent = function(argMx.styles.IAdvancedStyleClient) {
		b_MyMap_root.styleParent(argMx.styles.IAdvancedStyleClient);
	};

	MyMap.styleDeclaration = function() {
		return b_MyMap_root.styleDeclaration();
	};

	MyMap.styleDeclaration = function(argMx.styles.CSSStyleDeclaration) {
		b_MyMap_root.styleDeclaration(argMx.styles.CSSStyleDeclaration);
	};

	MyMap.repeater = function() {
		return b_MyMap_root.repeater();
	};

	MyMap.clearStyle = function(argString) {
		b_MyMap_root.clearStyle(argString);
	};

	MyMap.getBoundsXAtSize = function(argNumber1, argNumber2, argBoolean) {
		return b_MyMap_root.getBoundsXAtSize(argNumber1, argNumber2, argBoolean);
	};

	MyMap.enabled = function() {
		return b_MyMap_root.enabled();
	};

	MyMap.enabled = function(argBoolean) {
		b_MyMap_root.enabled(argBoolean);
	};

	MyMap.hasFontContextChanged = function() {
		return b_MyMap_root.hasFontContextChanged();
	};

	MyMap.width = function() {
		return b_MyMap_root.width();
	};

	MyMap.width = function(argNumber) {
		b_MyMap_root.width(argNumber);
	};

	MyMap.deleteReferenceOnParentDocument = function(argMx.core.IFlexDisplayObject) {
		b_MyMap_root.deleteReferenceOnParentDocument(argMx.core.IFlexDisplayObject);
	};

	MyMap.transitions = function() {
		return b_MyMap_root.transitions();
	};

	MyMap.transitions = function(argArray) {
		b_MyMap_root.transitions(argArray);
	};

	MyMap.accessibilityEnabled = function() {
		return b_MyMap_root.accessibilityEnabled();
	};

	MyMap.accessibilityEnabled = function(argBoolean) {
		b_MyMap_root.accessibilityEnabled(argBoolean);
	};

	MyMap.mouseY = function() {
		return b_MyMap_root.mouseY();
	};

	MyMap.mouseX = function() {
		return b_MyMap_root.mouseX();
	};

	MyMap.className = function() {
		return b_MyMap_root.className();
	};

	MyMap.top = function() {
		return b_MyMap_root.top();
	};

	MyMap.top = function(argObject) {
		b_MyMap_root.top(argObject);
	};

	MyMap.getAutomationChildren = function() {
		return b_MyMap_root.getAutomationChildren();
	};

	MyMap.getMaxBoundsHeight = function(argBoolean) {
		return b_MyMap_root.getMaxBoundsHeight(argBoolean);
	};

	MyMap.removeStyleClient = function(argMx.styles.IAdvancedStyleClient) {
		b_MyMap_root.removeStyleClient(argMx.styles.IAdvancedStyleClient);
	};

	MyMap.measureHTMLText = function(argString) {
		return b_MyMap_root.measureHTMLText(argString);
	};

	MyMap.cachePolicy = function() {
		return b_MyMap_root.cachePolicy();
	};

	MyMap.cachePolicy = function(argString) {
		b_MyMap_root.cachePolicy(argString);
	};

	MyMap.setLayoutMatrix = function(argFlash.geom.Matrix, argBoolean) {
		b_MyMap_root.setLayoutMatrix(argFlash.geom.Matrix, argBoolean);
	};

	MyMap.effectStarted = function(argMx.effects.IEffectInstance) {
		b_MyMap_root.effectStarted(argMx.effects.IEffectInstance);
	};

	MyMap.rotationZ = function() {
		return b_MyMap_root.rotationZ();
	};

	MyMap.rotationZ = function(argNumber) {
		b_MyMap_root.rotationZ(argNumber);
	};

	MyMap.verticalGradientMatrix = function(argNumber1, argNumber2, argNumber3, argNumber4) {
		return b_MyMap_root.verticalGradientMatrix(argNumber1, argNumber2, argNumber3, argNumber4);
	};

	MyMap.rotationX = function() {
		return b_MyMap_root.rotationX();
	};

	MyMap.rotationX = function(argNumber) {
		b_MyMap_root.rotationX(argNumber);
	};

	MyMap.rotationY = function() {
		return b_MyMap_root.rotationY();
	};

	MyMap.rotationY = function(argNumber) {
		b_MyMap_root.rotationY(argNumber);
	};

	MyMap.createAutomationIDPart = function(argMx.automation.IAutomationObject) {
		return b_MyMap_root.createAutomationIDPart(argMx.automation.IAutomationObject);
	};

	MyMap.maintainProjectionCenter = function(argBoolean) {
		b_MyMap_root.maintainProjectionCenter(argBoolean);
	};

	MyMap.maintainProjectionCenter = function() {
		return b_MyMap_root.maintainProjectionCenter();
	};

	MyMap.automationParent = function() {
		return b_MyMap_root.automationParent();
	};

	MyMap.automationEnabled = function() {
		return b_MyMap_root.automationEnabled();
	};

	MyMap.hasFocusableChildren = function() {
		return b_MyMap_root.hasFocusableChildren();
	};

	MyMap.hasFocusableChildren = function(argBoolean) {
		b_MyMap_root.hasFocusableChildren(argBoolean);
	};

	MyMap.scaleX = function() {
		return b_MyMap_root.scaleX();
	};

	MyMap.scaleX = function(argNumber) {
		b_MyMap_root.scaleX(argNumber);
	};

	MyMap.scaleY = function() {
		return b_MyMap_root.scaleY();
	};

	MyMap.scaleY = function(argNumber) {
		b_MyMap_root.scaleY(argNumber);
	};

	MyMap.validationSubField = function() {
		return b_MyMap_root.validationSubField();
	};

	MyMap.validationSubField = function(argString) {
		b_MyMap_root.validationSubField(argString);
	};

	MyMap.systemManager = function() {
		return b_MyMap_root.systemManager();
	};

	MyMap.systemManager = function(argMx.managers.ISystemManager) {
		b_MyMap_root.systemManager(argMx.managers.ISystemManager);
	};

	MyMap.initialized = function() {
		return b_MyMap_root.initialized();
	};

	MyMap.initialized = function(argBoolean) {
		b_MyMap_root.initialized(argBoolean);
	};

	MyMap.automationDelegate = function() {
		return b_MyMap_root.automationDelegate();
	};

	MyMap.automationDelegate = function(argObject) {
		b_MyMap_root.automationDelegate(argObject);
	};

	MyMap.includeInLayout = function() {
		return b_MyMap_root.includeInLayout();
	};

	MyMap.includeInLayout = function(argBoolean) {
		b_MyMap_root.includeInLayout(argBoolean);
	};

	MyMap.instanceIndex = function() {
		return b_MyMap_root.instanceIndex();
	};

	MyMap.layoutMatrix3D = function(argFlash.geom.Matrix3D) {
		b_MyMap_root.layoutMatrix3D(argFlash.geom.Matrix3D);
	};

	MyMap.removeChildAt = function(argInt) {
		return b_MyMap_root.removeChildAt(argInt);
	};

	MyMap.horizontalGradientMatrix = function(argNumber1, argNumber2, argNumber3, argNumber4) {
		return b_MyMap_root.horizontalGradientMatrix(argNumber1, argNumber2, argNumber3, argNumber4);
	};

	MyMap.determineTextFormatFromStyles = function() {
		return b_MyMap_root.determineTextFormatFromStyles();
	};

	MyMap.setLayoutBoundsPosition = function(argNumber1, argNumber2, argBoolean) {
		b_MyMap_root.setLayoutBoundsPosition(argNumber1, argNumber2, argBoolean);
	};

	MyMap.scaleZ = function() {
		return b_MyMap_root.scaleZ();
	};

	MyMap.scaleZ = function(argNumber) {
		b_MyMap_root.scaleZ(argNumber);
	};

	MyMap.setVisible = function(argBoolean1, argBoolean2) {
		b_MyMap_root.setVisible(argBoolean1, argBoolean2);
	};

	MyMap.matchesCSSType = function(argString) {
		return b_MyMap_root.matchesCSSType(argString);
	};

	MyMap.errorString = function() {
		return b_MyMap_root.errorString();
	};

	MyMap.errorString = function(argString) {
		b_MyMap_root.errorString(argString);
	};

	MyMap.nestLevel = function() {
		return b_MyMap_root.nestLevel();
	};

	MyMap.nestLevel = function(argInt) {
		b_MyMap_root.nestLevel(argInt);
	};

	MyMap.repeaterIndex = function() {
		return b_MyMap_root.repeaterIndex();
	};

	MyMap.uid = function() {
		return b_MyMap_root.uid();
	};

	MyMap.uid = function(argString) {
		b_MyMap_root.uid(argString);
	};

	MyMap.blendMode = function() {
		return b_MyMap_root.blendMode();
	};

	MyMap.blendMode = function(argString) {
		b_MyMap_root.blendMode(argString);
	};

	MyMap.transformZ = function() {
		return b_MyMap_root.transformZ();
	};

	MyMap.transformZ = function(argNumber) {
		b_MyMap_root.transformZ(argNumber);
	};

	MyMap.transformX = function() {
		return b_MyMap_root.transformX();
	};

	MyMap.transformX = function(argNumber) {
		b_MyMap_root.transformX(argNumber);
	};

	MyMap.transformY = function() {
		return b_MyMap_root.transformY();
	};

	MyMap.transformY = function(argNumber) {
		b_MyMap_root.transformY(argNumber);
	};

	MyMap.setConstraintValue = function(argString, arg) {
		b_MyMap_root.setConstraintValue(argString, arg);
	};

	MyMap.automationValue = function() {
		return b_MyMap_root.automationValue();
	};

	MyMap.validateNow = function() {
		b_MyMap_root.validateNow();
	};

	MyMap.effectFinished = function(argMx.effects.IEffectInstance) {
		b_MyMap_root.effectFinished(argMx.effects.IEffectInstance);
	};

	MyMap.getLayoutBoundsHeight = function(argBoolean) {
		return b_MyMap_root.getLayoutBoundsHeight(argBoolean);
	};

	MyMap.percentHeight = function() {
		return b_MyMap_root.percentHeight();
	};

	MyMap.percentHeight = function(argNumber) {
		b_MyMap_root.percentHeight(argNumber);
	};

	MyMap.horizontalCenter = function() {
		return b_MyMap_root.horizontalCenter();
	};

	MyMap.horizontalCenter = function(argObject) {
		b_MyMap_root.horizontalCenter(argObject);
	};

	MyMap.addStyleClient = function(argMx.styles.IAdvancedStyleClient) {
		b_MyMap_root.addStyleClient(argMx.styles.IAdvancedStyleClient);
	};

	MyMap.getRepeaterItem = function(argInt) {
		return b_MyMap_root.getRepeaterItem(argInt);
	};

	MyMap.matchesCSSState = function(argString) {
		return b_MyMap_root.matchesCSSState(argString);
	};

	MyMap.is3D = function() {
		return b_MyMap_root.is3D();
	};

	MyMap.resolveAutomationIDPart = function(argObject) {
		return b_MyMap_root.resolveAutomationIDPart(argObject);
	};

	MyMap.doubleClickEnabled = function() {
		return b_MyMap_root.doubleClickEnabled();
	};

	MyMap.doubleClickEnabled = function(argBoolean) {
		b_MyMap_root.doubleClickEnabled(argBoolean);
	};

	MyMap.stylesInitialized = function() {
		b_MyMap_root.stylesInitialized();
	};

	MyMap.postLayoutTransformOffsets = function() {
		return b_MyMap_root.postLayoutTransformOffsets();
	};

	MyMap.postLayoutTransformOffsets = function(argMx.geom.TransformOffsets) {
		b_MyMap_root.postLayoutTransformOffsets(argMx.geom.TransformOffsets);
	};

	MyMap.automationName = function() {
		return b_MyMap_root.automationName();
	};

	MyMap.automationName = function(argString) {
		b_MyMap_root.automationName(argString);
	};

	MyMap.getVisibleRect = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.getVisibleRect(argFlash.display.DisplayObject);
	};

	MyMap.endEffectsStarted = function() {
		b_MyMap_root.endEffectsStarted();
	};

	MyMap.getExplicitOrMeasuredHeight = function() {
		return b_MyMap_root.getExplicitOrMeasuredHeight();
	};

	MyMap.invalidateLayoutDirection = function() {
		b_MyMap_root.invalidateLayoutDirection();
	};

	MyMap.moduleFactory = function() {
		return b_MyMap_root.moduleFactory();
	};

	MyMap.moduleFactory = function(argMx.core.IFlexModuleFactory) {
		b_MyMap_root.moduleFactory(argMx.core.IFlexModuleFactory);
	};

	MyMap.inheritingStyles = function() {
		return b_MyMap_root.inheritingStyles();
	};

	MyMap.inheritingStyles = function(argObject) {
		b_MyMap_root.inheritingStyles(argObject);
	};

	MyMap.explicitMaxHeight = function() {
		return b_MyMap_root.explicitMaxHeight();
	};

	MyMap.explicitMaxHeight = function(argNumber) {
		b_MyMap_root.explicitMaxHeight(argNumber);
	};

	MyMap.hitTestPoint = function(argNumber1, argNumber2, argBoolean) {
		return b_MyMap_root.hitTestPoint(argNumber1, argNumber2, argBoolean);
	};

	MyMap.scaleX = function() {
		return b_MyMap_root.scaleX();
	};

	MyMap.scaleX = function(argNumber) {
		b_MyMap_root.scaleX(argNumber);
	};

	MyMap.scaleY = function() {
		return b_MyMap_root.scaleY();
	};

	MyMap.scaleY = function(argNumber) {
		b_MyMap_root.scaleY(argNumber);
	};

	MyMap.opaqueBackground = function() {
		return b_MyMap_root.opaqueBackground();
	};

	MyMap.opaqueBackground = function(argObject) {
		b_MyMap_root.opaqueBackground(argObject);
	};

	MyMap.globalToLocal3D = function(argFlash.geom.Point) {
		return b_MyMap_root.globalToLocal3D(argFlash.geom.Point);
	};

	MyMap.visible = function() {
		return b_MyMap_root.visible();
	};

	MyMap.visible = function(argBoolean) {
		b_MyMap_root.visible(argBoolean);
	};

	MyMap.blendMode = function() {
		return b_MyMap_root.blendMode();
	};

	MyMap.blendMode = function(argString) {
		b_MyMap_root.blendMode(argString);
	};

	MyMap.root = function() {
		return b_MyMap_root.root();
	};

	MyMap.localToGlobal = function(argFlash.geom.Point) {
		return b_MyMap_root.localToGlobal(argFlash.geom.Point);
	};

	MyMap.local3DToGlobal = function(argFlash.geom.Vector3D) {
		return b_MyMap_root.local3DToGlobal(argFlash.geom.Vector3D);
	};

	MyMap.mask = function() {
		return b_MyMap_root.mask();
	};

	MyMap.mask = function(argFlash.display.DisplayObject) {
		b_MyMap_root.mask(argFlash.display.DisplayObject);
	};

	MyMap.accessibilityProperties = function() {
		return b_MyMap_root.accessibilityProperties();
	};

	MyMap.accessibilityProperties = function(argFlash.accessibility.AccessibilityProperties) {
		b_MyMap_root.accessibilityProperties(argFlash.accessibility.AccessibilityProperties);
	};

	MyMap.stage = function() {
		return b_MyMap_root.stage();
	};

	MyMap.mouseY = function() {
		return b_MyMap_root.mouseY();
	};

	MyMap.transform = function() {
		return b_MyMap_root.transform();
	};

	MyMap.transform = function(argFlash.geom.Transform) {
		b_MyMap_root.transform(argFlash.geom.Transform);
	};

	MyMap.height = function() {
		return b_MyMap_root.height();
	};

	MyMap.height = function(argNumber) {
		b_MyMap_root.height(argNumber);
	};

	MyMap.rotation = function() {
		return b_MyMap_root.rotation();
	};

	MyMap.rotation = function(argNumber) {
		b_MyMap_root.rotation(argNumber);
	};

	MyMap.mouseX = function() {
		return b_MyMap_root.mouseX();
	};

	MyMap.name = function() {
		return b_MyMap_root.name();
	};

	MyMap.name = function(argString) {
		b_MyMap_root.name(argString);
	};

	MyMap.alpha = function() {
		return b_MyMap_root.alpha();
	};

	MyMap.alpha = function(argNumber) {
		b_MyMap_root.alpha(argNumber);
	};

	MyMap.getBounds = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.getBounds(argFlash.display.DisplayObject);
	};

	MyMap.rotationZ = function() {
		return b_MyMap_root.rotationZ();
	};

	MyMap.rotationZ = function(argNumber) {
		b_MyMap_root.rotationZ(argNumber);
	};

	MyMap.rotationX = function() {
		return b_MyMap_root.rotationX();
	};

	MyMap.rotationX = function(argNumber) {
		b_MyMap_root.rotationX(argNumber);
	};

	MyMap.getRect = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.getRect(argFlash.display.DisplayObject);
	};

	MyMap.scaleZ = function() {
		return b_MyMap_root.scaleZ();
	};

	MyMap.scaleZ = function(argNumber) {
		b_MyMap_root.scaleZ(argNumber);
	};

	MyMap.rotationY = function() {
		return b_MyMap_root.rotationY();
	};

	MyMap.rotationY = function(argNumber) {
		b_MyMap_root.rotationY(argNumber);
	};

	MyMap.globalToLocal = function(argFlash.geom.Point) {
		return b_MyMap_root.globalToLocal(argFlash.geom.Point);
	};

	MyMap.scrollRect = function() {
		return b_MyMap_root.scrollRect();
	};

	MyMap.scrollRect = function(argFlash.geom.Rectangle) {
		b_MyMap_root.scrollRect(argFlash.geom.Rectangle);
	};

	MyMap.width = function() {
		return b_MyMap_root.width();
	};

	MyMap.width = function(argNumber) {
		b_MyMap_root.width(argNumber);
	};

	MyMap.parent = function() {
		return b_MyMap_root.parent();
	};

	MyMap.cacheAsBitmap = function() {
		return b_MyMap_root.cacheAsBitmap();
	};

	MyMap.cacheAsBitmap = function(argBoolean) {
		b_MyMap_root.cacheAsBitmap(argBoolean);
	};

	MyMap.blendShader = function(argFlash.display.Shader) {
		b_MyMap_root.blendShader(argFlash.display.Shader);
	};

	MyMap.loaderInfo = function() {
		return b_MyMap_root.loaderInfo();
	};

	MyMap.scale9Grid = function() {
		return b_MyMap_root.scale9Grid();
	};

	MyMap.scale9Grid = function(argFlash.geom.Rectangle) {
		b_MyMap_root.scale9Grid(argFlash.geom.Rectangle);
	};

	MyMap.hitTestObject = function(argFlash.display.DisplayObject) {
		return b_MyMap_root.hitTestObject(argFlash.display.DisplayObject);
	};

	MyMap.z = function() {
		return b_MyMap_root.z();
	};

	MyMap.z = function(argNumber) {
		b_MyMap_root.z(argNumber);
	};

	MyMap.y = function() {
		return b_MyMap_root.y();
	};

	MyMap.y = function(argNumber) {
		b_MyMap_root.y(argNumber);
	};

	MyMap.filters = function() {
		return b_MyMap_root.filters();
	};

	MyMap.filters = function(argArray) {
		b_MyMap_root.filters(argArray);
	};

	MyMap.x = function() {
		return b_MyMap_root.x();
	};

	MyMap.x = function(argNumber) {
		b_MyMap_root.x(argNumber);
	};

	MyMap.getElementIndex = function(argMx.core.IVisualElement) {
		return b_MyMap_root.getElementIndex(argMx.core.IVisualElement);
	};

	MyMap.removeElementAt = function(argInt) {
		return b_MyMap_root.removeElementAt(argInt);
	};

	MyMap.deferredContentCreated = function() {
		return b_MyMap_root.deferredContentCreated();
	};

	MyMap.addElement = function(argMx.core.IVisualElement) {
		return b_MyMap_root.addElement(argMx.core.IVisualElement);
	};

	MyMap.removeElement = function(argMx.core.IVisualElement) {
		return b_MyMap_root.removeElement(argMx.core.IVisualElement);
	};

	MyMap.setElementIndex = function(argMx.core.IVisualElement, argInt) {
		b_MyMap_root.setElementIndex(argMx.core.IVisualElement, argInt);
	};

	MyMap.mxmlContent = function(argArray) {
		b_MyMap_root.mxmlContent(argArray);
	};

	MyMap.contentGroup = function() {
		return b_MyMap_root.contentGroup();
	};

	MyMap.contentGroup = function(argSpark.components.Group) {
		b_MyMap_root.contentGroup(argSpark.components.Group);
	};

	MyMap.createDeferredContent = function() {
		b_MyMap_root.createDeferredContent();
	};

	MyMap.layout = function() {
		return b_MyMap_root.layout();
	};

	MyMap.layout = function(argSpark.layouts.supportClasses.LayoutBase) {
		b_MyMap_root.layout(argSpark.layouts.supportClasses.LayoutBase);
	};

	MyMap.swapElementsAt = function(argInt1, argInt2) {
		b_MyMap_root.swapElementsAt(argInt1, argInt2);
	};

	MyMap.numElements = function() {
		return b_MyMap_root.numElements();
	};

	MyMap.swapElements = function(argMx.core.IVisualElement1, argMx.core.IVisualElement2) {
		b_MyMap_root.swapElements(argMx.core.IVisualElement1, argMx.core.IVisualElement2);
	};

	MyMap.mxmlContentFactory = function(argMx.core.IDeferredInstance) {
		b_MyMap_root.mxmlContentFactory(argMx.core.IDeferredInstance);
	};

	MyMap.autoLayout = function() {
		return b_MyMap_root.autoLayout();
	};

	MyMap.autoLayout = function(argBoolean) {
		b_MyMap_root.autoLayout(argBoolean);
	};

	MyMap.getElementAt = function(argInt) {
		return b_MyMap_root.getElementAt(argInt);
	};

	MyMap.moduleFactory = function(argMx.core.IFlexModuleFactory) {
		b_MyMap_root.moduleFactory(argMx.core.IFlexModuleFactory);
	};

	MyMap.creationPolicy = function() {
		return b_MyMap_root.creationPolicy();
	};

	MyMap.creationPolicy = function(argString) {
		b_MyMap_root.creationPolicy(argString);
	};

	MyMap.addElementAt = function(argMx.core.IVisualElement, argInt) {
		return b_MyMap_root.addElementAt(argMx.core.IVisualElement, argInt);
	};

	MyMap.removeAllElements = function() {
		b_MyMap_root.removeAllElements();
	};

}

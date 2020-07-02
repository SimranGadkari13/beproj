package com.myapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
<<<<<<< HEAD
import com.reactnativenavigation.controllers.SplashActivity;
import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends SplashActivity {
=======

public class MainActivity extends ReactActivity {
>>>>>>> 30a680682478e6dce54717e0d2b08eed24b748e5

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
<<<<<<< HEAD
    
    
=======
    @Override
    protected String getMainComponentName() {
        return "myapp";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
>>>>>>> 30a680682478e6dce54717e0d2b08eed24b748e5
}

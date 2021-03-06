<?php namespace App\Providers;
 
/**
* ServiceProvider
*
* The service provider for the modules. After being registered
* it will make sure that each of the modules are properly loaded
* i.e. with their routes, views etc.
*
* @author Kamran Ahmed <kamranahmed.se@gmail.com>
* @package App\Modules
*/
class ModulesServiceProvider extends \Illuminate\Support\ServiceProvider
{
    /**
     * Will make sure that the required modules have been fully loaded
     * @return void
     */
    public function boot()
    {
        // For each of the registered modules, include their routes and Views
        $modules = config("module.modules");

        while (list(,$module) = each($modules)) {

            // Load the routes for each of the modules
            if(file_exists(__DIR__.'/../../modules/'.$module.'/server/routes.php')) {
                include __DIR__.'/../../../modules/'.$module.'/server/routes.php';
            }

            // Load the views
            if(is_dir(__DIR__.'/../../modules/'.$module.'/server/views')) {
                $this->loadViewsFrom(__DIR__.'/../../modules/'.$module.'/server/views', $module);
            }
        }
    }

    public function register() {}

}
using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularTypeScriptSignalrExample.Startup))]
namespace AngularTypeScriptSignalrExample
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            ConfigureAuth(app);
        }
    }
}

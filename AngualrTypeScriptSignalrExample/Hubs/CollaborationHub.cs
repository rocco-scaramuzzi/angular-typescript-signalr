using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace AngualrTypeScriptSignalrExample.Hubs
{
    public class CollaborationHub : Hub
    {
        
        public void SendToOthersMyChangeNotification(string changeMessage)
        {
            Clients.Others.showNewChangeNotification(changeMessage);
        }
    }
}
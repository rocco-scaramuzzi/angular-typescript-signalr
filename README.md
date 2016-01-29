"# angular-typescript-signalr" 
This is an ASP.NET MVC solution which contains a simple realtime app example about how to use angular signalr wrapper with typescript.

You can access the relatime app at this url: "/realtime-app/index.html#/cities".

The app contains a list of cities, by clicking on the edit button you can add, update and delete a city 
(All those operations are at client-side, no DataBase is used).
For each change, a notification will be sent to the others connected clients. 

As angular singnalR wrapper I used this one: https://github.com/JustMaier/angular-signalr-hub. 
In order to use it with typescript you need instal its typescript definition file (angular-signalr-hub.d.ts) plus the signalr one (signalr.d.ts).

Notes:
- for this current version the change is not replicated for the others clients, it is only sent a notification
- The solution has been created using Visual Studio 2015
  
 

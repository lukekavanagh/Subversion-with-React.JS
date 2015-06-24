using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;

namespace VotingApp
{
    public class VotingHub : Hub
    {
        public static Dictionary<string, int> poll = new Dictionary<string, int>()
        {
            {"Blair", 10},
            {"Brown", 10},
            {"Churchill", 10},
            {"Thatcher", 10},
            {"Cameron", 10},
        };

        public void Send(string name)
        {
            poll[name]++;
            string data = JsonConvert.SerializeObject(poll.Select(x => new { name = x.Key, count = x.Value }).ToList());

            Clients.All.showLiveResult(data);
        }
    }
}
(function(window, undefined) {
  var dictionary = {
    "10132c0c-1598-424e-9c68-0ece5fd45caf": "forget pwd",
    "27118cd1-68e0-414a-851c-f14ee3262a78": "change pwd",
    "9199ef59-8592-4b15-b0a1-3bbedf560a61": "POSTER service",
    "3ca6bf3e-6730-4ce9-b87e-b161998d7b6d": "slide",
    "4bb072ad-5fe4-4820-84f6-561915fc2321": "MyProfil",
    "a57ebf64-e18e-4140-be6a-8fda0d6c0db0": "repondre besoin 3",
    "372eb963-deb4-4cf1-a910-17b5243a2872": "register",
    "4702610a-d38f-4535-9038-521423e22559": "login",
    "b45176a2-d9db-4967-b110-29876f69cd27": "home page",
    "f5a7ee6a-7e15-4b0e-aab9-96b6d01c2aa2": "get code",
    "722c01a0-ae62-494b-9c78-471bf43cc848": "services",
    "fe00d59f-d6b4-490e-9a97-8f454824b564": "Repondre un besoin",
    "aa44c35c-92cd-4d26-a02c-aaea17683e6c": "repondre un service",
    "57d974c7-a2b9-45b3-9595-ee46e65920fc": "service2",
    "948cc35e-8942-4ec5-a3b2-aefb2b2baf4b": "repondre besoin 2",
    "5a350288-e633-4177-8af3-2ce55d25769c": "About App",
    "756d8852-dd9f-44a4-b92e-e7c70181159a": "reporter2",
    "f81db220-080f-433a-b17f-9f5cc394911a": "settings",
    "c4962e9b-21a4-4947-bd6a-c81d8365e31e": "reponse 4",
    "5a949d4d-ee1a-4d24-a8c1-6ace3b7d40b4": "list categories",
    "75fcde6b-ca0f-4312-94a1-223179145318": "Reporter",
    "9d15387e-f971-46dc-9bb7-26024b675ccc": "service3",
    "16d28e70-63e4-4bbd-8af1-d093c53d4831": "Poster Mon Besoin",
    "3698617a-2ec5-4cc9-9376-3d74f72c807d": "notification",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "512096d2-8bc9-48e5-beee-cc6918bf2063": "contact",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
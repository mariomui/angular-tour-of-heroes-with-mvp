shared
     |-- [+] components
     |-- [+] directives
     |-- [+] pipes
     |-- [+] individual-services

Keep in mind tht the individual services in shared are instantiated multiple times and therefore not provided in the root.

I dont like the name of this folder. You are making assumptions very early on about what is shared.

These are more like non static classes. ViewProviders in the component level or lower level modules.
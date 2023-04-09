var ConfigClCh = {
    //Do you want to activate the chat auto emptying? Only false or true
    autoClear: true,
    //Just modify the number! the time in seconds
    timeInterval: 1700,
    //The message you send when clearing the Chat!
    Message: "Se ha Limpiado el Chat!/Chat has been cleaned up!"
};
//don't change the rest!
var pluginInfClCh = {
    PluginName: "ClearChat",
    Version: "1.0",
    WebSite: "https://github.com/Trollhunters501/Trollhunters501",
    author: "Creadores Program"
};
var pluginNameClCh = "[" + pluginInfClCh.PluginName + "] ";
function onEnable(){
    logger.info(pluginNameClCh + "§eLoading...");
    if(ConfigClCh.autoClear != false){
      manager.createLoopTask("clearChatF", ConfigClCh.timeInterval * ConfigClCh.timeInterval);
    }
    manager.createCommand("clearchat", "Vaciar tu chat!/Empty your chat!", "clearChatCommand");
    logger.info(pluginNameClCh + "§aLoaded!");
    logger.info(pluginNameClCh + "§1Powered By §aCreadores §1Program");
}
onEnable();
function clearChatF(currentTick){
    server.broadcastMessage("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    server.broadcastMessage("§a" + pluginNameClCh + ConfigClCh.Message);
}
function clearChatCommand(sender, args){
    sender.sendMessage("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    sender.sendMessage("§a" + pluginNameClCh + ConfigClCh.Message);
}
let ConfigClCh = {};
//don't change the rest!
let pluginNameClCh = "[ClearChatNK] ";
function load(){
    let subconf = manager.getFile("ClearChatNK", "config.json");
    if(!subconf.exists()){
        let escritor = new java.io.FileWriter(subconf);
        escritor.write(JSON.stringify(require("./config.json")));
        escritor.close();
    }
    ConfigClCh = JSON.parse(readFully(subconf.getAbsolutePath()));
}
function enable(){
    logger.info(pluginNameClCh + "§eLoading...");
    if(ConfigClCh.autoClear != false){
      manager.createLoopTask(clearChatF, ConfigClCh.timeInterval);
    }
    manager.createCommand("clearchat", "Vaciar tu chat!/Empty your chat!", clearChatCommand);
    logger.info(pluginNameClCh + "§aLoaded!");
    logger.info(pluginNameClCh + "§1Powered By §aCreadores §1Program");
}
function clearChatF(currentTick){
    server.broadcastMessage("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    server.broadcastMessage("§a" + pluginNameClCh + ConfigClCh.Message);
}
function clearChatCommand(sender, args){
    sender.sendMessage("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    sender.sendMessage("§a" + pluginNameClCh + ConfigClCh.Message);
}
module.exports = {
    onEnable: enable,
    onLoad: load
};
import storage from "node-persist"
export const ChatInterface = async (socket) => {
    await storage.init()


}
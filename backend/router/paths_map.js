export const ROUTE_PATH = {
    test: "test",
    chat: "chat"
}

export const ROUTE_MAP = {
    [`/${ROUTE_PATH.test}`]: (req, res)=>{res.json(`${Date.now().toLocaleString()}`)},
    [`/${ROUTE_PATH.chat}`] : (req, res)=>{}
}
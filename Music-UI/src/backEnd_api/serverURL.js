const backEndSerer={
    ROOT:"http://localhost:8080",
    method:'get'
};
const apiURL={
    login:backEndSerer.ROOT.concat('/login'),
    mark:backEndSerer.ROOT.concat('/mark')
};
export default apiURL

const nodeServer={
    API_ROOT:"https://netease-cloud-music-api-1g5y.vercel.app",
    method:"get"
};
const apiURL = {
    loginCellphone: '/login/cellphone',  // 手机登陆
    userPlaylist: '/user/playlist',  // 获取用户歌单
    playlistDetail: '/playlist/detail',  // 获取歌单详情
    musicUrl: '/music/url', // 获取音乐url
    search: '/search',  // 搜素音乐
    lyric: '/lyric',  // 获取歌词
    comment: '/comment',  // 获取评论
    album: '/album', //  获取专辑内容
    artists: '/artists',  // 获取歌手单曲列表
    artistAlbum: '/artist/album',  // 获取歌手专辑列表
    artistDesc: '/artist/desc', //  获取歌手信息
    recommendResource: '/recommend/resource', // 获取每日推荐歌单（用户级）
    recommendSongs: '/recommend/songs',  // 获取每日推荐歌曲（用户级）
    personalFm: '/personal_fm', // 私人FM(用户级)
    dailySignin: '/daily_signin',  // 签到(用户级)
    likeMusic: '/like', // 添加喜欢的音乐(用户级)
    fmTrash: '/fm_trash', // 将音乐从私人FM中移除至垃圾桶
    topPlaylist: '/top/playlist', //  歌单(网友精选歌单)
    newAlbum: '/top/albums',  // 新碟上架
    topArtists: '/top/artists', //  热门歌手
    topList: '/top/list', //  音乐排行榜
    personalized: '/personalized', //  推荐歌单
    privatecontent: '/personalized/privatecontent',  // 独家放送
    personalizedMv: '/personalized/mv',  // 推荐MV
    newSong: '/personalized/newsong', // 推荐音乐
    djProgram: '/personalized/djprogram',  // 推荐电台
    mv: '/mv', // 获取mv数据
    simiMv: '/simi/mv', // 获取相似mv
    mvComment: '/comment/mv',  // 获取mv评论
    playlistComment: '/comment/playlist',  // 获取歌单评论
    albumComment: '/comment/album',  // 获取专辑评论
    artistMv: '/artist/mv'  // 获取歌手MV
};
export const LoginCellphoneResource = nodeServer.API_ROOT.concat(apiURL.loginCellphone);
export const UserPlaylistResource = nodeServer.API_ROOT.concat(apiURL.userPlaylist);
export const PlaylistDetailResource = nodeServer.API_ROOT.concat(apiURL.playlistDetail);
export const MusicUrlResource = nodeServer.API_ROOT.concat(apiURL.musicUrl);
export const SearchResource = nodeServer.API_ROOT.concat(apiURL.search);
export const LyricResource = nodeServer.API_ROOT.concat(apiURL.lyric);
export const CommentResource = nodeServer.API_ROOT.concat(apiURL.comment);
export const AlbumResource = nodeServer.API_ROOT.concat(apiURL.album);
export const ArtistsResource = nodeServer.API_ROOT.concat(apiURL.artists);
export const ArtistAlbumResource = nodeServer.API_ROOT.concat(apiURL.artistAlbum);
export const ArtistDescResource = nodeServer.API_ROOT.concat(apiURL.artistDesc);
export const RecommendResource = nodeServer.API_ROOT.concat(apiURL.recommendResource);
export const RecommendSongsResource = nodeServer.API_ROOT.concat(apiURL.recommendSongs);
export const PersonalFmResource = nodeServer.API_ROOT.concat(apiURL.personalFm);
export const DailySigninResource = nodeServer.API_ROOT.concat(apiURL.dailySignin);
export const LikeMusicResource = nodeServer.API_ROOT.concat(apiURL.likeMusic);
export const FmTrashResource = nodeServer.API_ROOT.concat(apiURL.fmTrash);
export const TopPlaylistResource = nodeServer.API_ROOT.concat(apiURL.topPlaylist);
export const NewAlbumResource = nodeServer.API_ROOT.concat(apiURL.newAlbum);
export const TopArtistsResource = nodeServer.API_ROOT.concat(apiURL.topArtists);
export const TopListResource = nodeServer.API_ROOT.concat(apiURL.topList);
export const PersonalizedResource = nodeServer.API_ROOT.concat(apiURL.personalized);
export const PrivatecontentResource = nodeServer.API_ROOT.concat(apiURL.privatecontent);
export const PersonalizedMvResource = nodeServer.API_ROOT.concat(apiURL.personalizedMv);
export const NewSongResource = nodeServer.API_ROOT.concat(apiURL.newSong);
export const DjProgramResource = nodeServer.API_ROOT.concat(apiURL.djProgram);
export const MvResource = nodeServer.API_ROOT.concat(apiURL.mv);
export const SimiMvResource = nodeServer.API_ROOT.concat(apiURL.simiMv);
export const MvCommentResource = nodeServer.API_ROOT.concat(apiURL.mvComment);
export const PlaylistCommentResource = nodeServer.API_ROOT.concat(apiURL.playlistComment);
export const AlbumCommentResource = nodeServer.API_ROOT.concat(apiURL.albumComment);
export const ArtistMvResource = nodeServer.API_ROOT.concat(apiURL.artistMv);

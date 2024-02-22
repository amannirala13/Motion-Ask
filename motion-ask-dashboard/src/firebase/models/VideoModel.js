export function VideoModel({
                               id,
                               title,
                               description,
                               creator,
                               content,
                               poster,
                               duration,
                               transcription_ready = false,
                           }){
    return {
        id:id,
        title: title,
        description: description,
        creator: creator,
        content: content,
        poster: poster,
        duration: duration,
        transcription_ready: transcription_ready
    }
}
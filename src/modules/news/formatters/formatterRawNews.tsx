import New from "../interfaces/New"

const formatterRawNews = (rawNews: any): New[] => {
  return rawNews.map((_new: any) => ({
    author: _new.author,
    createdAt: _new.created_at,
    objectID: _new.objectID,
    storyTitle: _new.story_title,
    storyUrl: _new.story_url
  })
  )
};

export default formatterRawNews


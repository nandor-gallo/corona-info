//Compare thge number of likes between two stories
export function compareLikes(a, b){
  const aLikes = a.likes;
  const bLikes = b.likes;

  let comp = 0;
  if(aLikes > bLikes){
    comp = 1;
  }else if(alikes < bLikes){
    comp = -1;
  }
  return comp;
}

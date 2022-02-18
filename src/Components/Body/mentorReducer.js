const initialState = {
  mentors: [
    {
      name: "Vazir",
      img: "https://cdn1.vectorstock.com/i/1000x1000/89/50/generic-person-gray-photo-placeholder-man-vector-24848950.jpg",
      desc: "this is 1st mentor",
    },
  ],
};
export const mentorReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_MENTORS"
    return state,

  }
  // return state;
};

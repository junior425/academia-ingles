const UNSPLASH_BASE = "https://images.unsplash.com";

export function unsplash(id, width = 900) {
  return `${UNSPLASH_BASE}/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const PHOTOS = {
  professionals: "photo-1600880292203-757bb62b4baf",
  meeting: "photo-1517048676732-d65bc937f952",
  coworking: "photo-1519389950473-47ba0277781c",
  studyGroup: "photo-1522202176988-66273c2fd55f",
  studentNotes: "photo-1596495578065-6e0763fa1178",
  onlineClass: "photo-1516321318423-f06f85e504b3",
  learnerPhone: "photo-1522071820081-009f0129c71c",
  airport: "photo-1569154941061-e231b4725ef1",
  planeWindow: "photo-1436491865332-7a61a109cc05",
  kidsClass: "photo-1588075592446-265fd1e6e76f",
  kidsPlay: "photo-1587654780291-39c9404d746b",
  port: "photo-1494412574643-ff11b0a5c1c3",
  doctor: "photo-1576091160399-112ba8d25d1d",
  engineering: "photo-1581092160562-40aa08e78837",
};

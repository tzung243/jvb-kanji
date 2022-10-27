import React from "react";
import UndrawStars from "../Assets/UndrawStars.svg";


const words = [
  { jp: "やあ", vn: "Xin chào" },
  { jp: "おはようございます", vn: "Chào buổi sáng" },
  { jp: "お久しぶりです", vn: "Lâu quá không gặp" },
  { jp: "お元 気ですか", vn: "Bạn khoẻ không?" },
  { jp: "お久しぶりです", vn: "Lâu không gặp" },
  { jp: "ドラえもん", vn: "Doraemon" },
  { jp: "愛してます", vn: "Tôi yêu bạn" },
  { jp: "たすかります", vn: "May quá, cảm ơn nhiều" },
  { jp: "きれいですね", vn: "Đẹp quá!" },
  { jp: "野比 のび太", vn: "Nobi Nobita" },
  { jp: "すみません", vn: "Xin lỗi" },
  { jp: "どなたですか", vn: "Ai thế ạ?" },
  { jp: "どうぞ", vn: "Xin mời" },
  { jp: "いくらですか", vn: "Giá bao nhiêu?" },
  { jp: "しずか", vn: "Minamoto Shizuka" },
  { jp: "がんばって!", vn: "Cố gắng lên!" },
  { jp: "いただきます", vn: "Mời dùng bữa" },
  { jp: "何時ですか:", vn: "Mấy giờ rồi" },
  { jp: "ジャイアン", vn: "Jaian" },
  { jp: "正しいです", vn: "Đúng rồi!" },
  { jp: "高かいですね", vn: "Đắt quá nhỉ" },
  { jp: "ええの？", vn: "Được không?" },
  { jp: "おもろい", vn: "Thú vị thật" },
  { jp: "びっくりした", vn: "Bất ngờ quá" },
  { jp: "助けて", vn: "Giúp tôi với" },
  { jp: "また 後で", vn: "Hẹn gặp lại" },
  { jp: "きまってるね", vn: "Quyết định vậy nhé" },
  { jp: "急いでください", vn: "Xin hãy nhanh lên" },
  { jp: "よくやった！", vn: "Bạn làm tốt lắm!" },
  { jp: "きまってるね", vn: "Quyết định vậy nhé" },
  { jp: "お休みなさい", vn: "Chúc ngủ ngon!" },
  { jp: "さようなら", vn: "Tạm biệt" },
];

export const Vocabulary = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <section className="w-full flex justify-center items-center">
      <main className="lg:w-lg w-full flex flex-col lg:flex-row justify-center items-center pb-0 lg:py-24">
        <img src={UndrawStars} alt="" className="w-96 my-4" />
        <div className="w-full px-4 py-12 flex flex-row justify-between items-center space-x-2 h-min ">
          <button className="bg-rose-400 hover:ring-4 hover:ring-rose-300 text-white text-center w-8 h-8 rounded-md shadow-sm drop-shadow-sm disabled:bg-gray-400 disabled:hover:ring-gray-300 duration-300 transition-all" disabled={counter <= 0} onClick={() => {
            let _counter = counter - 1
            if (_counter < 0) {
              _counter = words.length - 1;
            }
            setCounter(_counter);
          }}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="flex flex-col items-center justify-center transition-all duration-300">
            <p className="text-gray-600 text-5xl font-bold">{words[counter].jp}</p>
            <p className="text-gray-400 text-2xl font-semibold">{words[counter].vn}</p>
          </div>
          <button className="bg-rose-400 hover:ring-4 hover:ring-rose-300 text-white text-center w-8 h-8 rounded-md shadow-sm drop-shadow-sm disabled:bg-gray-400 disabled:hover:ring-gray-300 duration-300 transition-all" disabled={counter >= words.length - 1} onClick={() => {
            let _counter = counter + 1
            if (_counter > counter.length - 1) {
              _counter = 0;
            }
            setCounter(_counter);
          }}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </main>
    </section>
  );
};

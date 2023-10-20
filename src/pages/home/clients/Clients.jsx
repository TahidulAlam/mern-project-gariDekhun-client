import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import "@splidejs/splide/dist/css/splide.min.css";
// import "./styles.css";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

// or only core styles
// import "@splidejs/react-splide/css/core";
import "./clients.css";
const Clients = () => {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 6,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: true,
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
      className="lg:p-10 p-3 rounded-lg bg-white"
    >
      <SplideSlide>
        <img src="https://i.ibb.co/7X4bPsQ/Untitled-1.png" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.ibb.co/YTzFWzC/Untitled-2.png" alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.ibb.co/JmQYKYN/Untitled-3.png" alt="Image 3" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.ibb.co/020Rk74/Untitled-4.png" alt="Image 4" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.ibb.co/zbdrz8v/Untitled-5.png" alt="Image 5" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://i.ibb.co/BZMzWfP/Untitled-6.png" alt="Image 6" />
      </SplideSlide>
    </Splide>
  );
};
// https://i.ibb.co/7X4bPsQ/Untitled-1.png
// https://i.ibb.co/YTzFWzC/Untitled-2.png

export default Clients;

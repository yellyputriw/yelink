import Image from "next/image";
import Link from "next/link";

const AUList = () => {
  return (
    <>
      <div className="mt-3 flex flex-col items-center px-4 text-center">
        <Image
          src="/gose/bestfriends.jpg"
          alt="halu"
          width={100}
          height={100}
        />
        <p className="text-[14px] font-['Rancho']">Rekomendasi AU Twitter</p>
      </div>
      <div className=" w-full mt-5">
        <ul className="mx-auto flex flex-col justify-center max-w-xs ">
          <li>
            <div>
              <blockquote className="twitter-tweet" data-conversation="block">
                <p lang="en" dir="ltr">
                  what if you’re someone
                  <br />i just want around?
                  <br />
                  <br />— a wonwoo and dokyeom twins au{" "}
                  <a href="https://t.co/18ckWgovHV">
                    pic.twitter.com/18ckWgovHV
                  </a>
                </p>
                &mdash; ♡ (@prefjer){" "}
                <a href="https://twitter.com/prefjer/status/1519969725388042242?ref_src=twsrc%5Etfw">
                  April 29, 2022
                </a>
              </blockquote>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"></script>
            </div>
          </li>
          <li>
            <div>
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  Hi Milan, I h̶a̶t̶e̶ love you.
                  <br />
                  <br />
                  mingyu x oc au
                  <br />
                  svt!au
                  <br />
                  <br />
                  Dear Milan, I always wanted you to be a part of my book. But
                  you ended up becoming my whole damn story.{" "}
                  <a href="https://t.co/haCdwephMW">
                    pic.twitter.com/haCdwephMW
                  </a>
                </p>
                &mdash; Dilla. (@tellazh){" "}
                <a href="https://twitter.com/tellazh/status/1444310331308720128?ref_src=twsrc%5Etfw">
                  October 2, 2021
                </a>
              </blockquote>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"></script>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AUList;

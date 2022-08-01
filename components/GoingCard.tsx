import React from "react";
import Image from "next/image";
import Link from "next/link";

const GoingCard = () => {
  return (
    <div>
      <ul>
        <li>
          <div>
            <Image src="./" alt="bestfriends" width={100} height={50} />
            <div>
              <h2>Best Friends</h2>
              <Link href="/">
                <a></a>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GoingCard;

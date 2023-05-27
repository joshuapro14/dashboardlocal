import React from "react";
import Style from "./actionInfoBar.module.css";

/*
😄

"https://s3-alpha-sig.figma.com/img/c702/619c/30ad21ef2ca096210f670f488dcf0a56?Expires=1685923200&Signature=QkWPdZd6J3ZOHRIRb7aKGdz6sqMLLiQhvdD~CuWDKH3FOFODPpkVb8c-PFRNYMGPNNisrcndXsxA3mp9KYyWTTzQ3bWF3AizFjf6ikUsB09Syhh9EJj-7v7u6YfGzqdLg-trZCWMk4ilsMsTFnihZ5TJupw8VNydTdd2h7lKJHHiZzsdCaQAFhhbTDxOUEPTwUQmjK3UuTbukm9OjyGzz2M3TnCWRT8WbtCg6Tq2PWkWyYsKCfSKaSwEG7qGoptBINWSWXJHyhJdT34HmDSHJdbw1OPJs5uHbuUEdxVevFX4HBWpgbWqrl0tMxKjCBHPc-VW32Az3S4iDy4kNZsoUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/8d56/b849/6bb56a3ef95d61a31479a1ab49f217df?Expires=1685923200&Signature=IxWwOZ2~DARx78ZdsFRDTVLmMUHIHWhQp8ClRdq1TqoWqhbtoa7-Yk94u1DM0iJAkTKSJNqjtmQTebL8aKgrPs93eCN3U8t~MwTM44mjnkOGHYipPH8k2SGd8clprqIvx6ViIMvyo6s3nP1ggQJfQEtdsaAq-VX8JhapZTUA7NccBiNXKM~QaNch50Wd2L~tOTnA1OeTl032u-2AHfVK8oB~-t5CpVTN~S1hD9EbREqhesVctE8JBiiU8wEUXraWgdM1ljuc0mqsW6oeCpsQVYoamxmOSbkSaTKnHrGUrsp~8W5NfjiovxAlibwhdu91VVhSKFg5mffKfswC~Aci9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/759c/797a/6d01da11a476252d7f88a82e4095eb9d?Expires=1685923200&Signature=exYt~se1ti43hDN1hYEMDfEBbajfGJq3axtQP1IG1nq3XWFZGOGwmfXCuHqEFwrEyQM43PRa3myeH99EC5um23FfgxhaENXurQgBx0t~1FsJks5F1eTC8LPGJLjKR9MzfS0Hb25~v2Kr~sjwKvJOR5QFqwCbszYAGFsOGibTpYc-q0cNKd9bOL1Ztiu8GS9F99~xJm7NxZ8VZj2DJL6hvfzydOGHduRV6KFowKTxflxSTIeTFrhpiieuOMG49Li6-J2j0c-oOlW2UKVaVnyUfvk3a-6mO6~VpFnuOPqe~5jbzNjbh0gg9dSyEeNLHGkZdwEztK87kZCHxZf0rPICTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
*/

const data = [
  {
    url:
      "https://s3-alpha-sig.figma.com/img/c702/619c/30ad21ef2ca096210f670f488dcf0a56?Expires=1685923200&Signature=QkWPdZd6J3ZOHRIRb7aKGdz6sqMLLiQhvdD~CuWDKH3FOFODPpkVb8c-PFRNYMGPNNisrcndXsxA3mp9KYyWTTzQ3bWF3AizFjf6ikUsB09Syhh9EJj-7v7u6YfGzqdLg-trZCWMk4ilsMsTFnihZ5TJupw8VNydTdd2h7lKJHHiZzsdCaQAFhhbTDxOUEPTwUQmjK3UuTbukm9OjyGzz2M3TnCWRT8WbtCg6Tq2PWkWyYsKCfSKaSwEG7qGoptBINWSWXJHyhJdT34HmDSHJdbw1OPJs5uHbuUEdxVevFX4HBWpgbWqrl0tMxKjCBHPc-VW32Az3S4iDy4kNZsoUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    url:
      "https://s3-alpha-sig.figma.com/img/8d56/b849/6bb56a3ef95d61a31479a1ab49f217df?Expires=1685923200&Signature=IxWwOZ2~DARx78ZdsFRDTVLmMUHIHWhQp8ClRdq1TqoWqhbtoa7-Yk94u1DM0iJAkTKSJNqjtmQTebL8aKgrPs93eCN3U8t~MwTM44mjnkOGHYipPH8k2SGd8clprqIvx6ViIMvyo6s3nP1ggQJfQEtdsaAq-VX8JhapZTUA7NccBiNXKM~QaNch50Wd2L~tOTnA1OeTl032u-2AHfVK8oB~-t5CpVTN~S1hD9EbREqhesVctE8JBiiU8wEUXraWgdM1ljuc0mqsW6oeCpsQVYoamxmOSbkSaTKnHrGUrsp~8W5NfjiovxAlibwhdu91VVhSKFg5mffKfswC~Aci9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    avatar: "😄"
  },
  {
    url:
      "https://s3-alpha-sig.figma.com/img/759c/797a/6d01da11a476252d7f88a82e4095eb9d?Expires=1685923200&Signature=exYt~se1ti43hDN1hYEMDfEBbajfGJq3axtQP1IG1nq3XWFZGOGwmfXCuHqEFwrEyQM43PRa3myeH99EC5um23FfgxhaENXurQgBx0t~1FsJks5F1eTC8LPGJLjKR9MzfS0Hb25~v2Kr~sjwKvJOR5QFqwCbszYAGFsOGibTpYc-q0cNKd9bOL1Ztiu8GS9F99~xJm7NxZ8VZj2DJL6hvfzydOGHduRV6KFowKTxflxSTIeTFrhpiieuOMG49Li6-J2j0c-oOlW2UKVaVnyUfvk3a-6mO6~VpFnuOPqe~5jbzNjbh0gg9dSyEeNLHGkZdwEztK87kZCHxZf0rPICTw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  },
  {
    avatar: "+"
  }
];

//avatarGroup

const Avatars = () => {
  return (
    <div className={Style.avatarGroup}>
      {data.map((d) => {
        if (d.url) {
          return (
            <span className={Style.avatar}>
              <img src={d.url} alt="avatar" />
            </span>
          );
        } else {
          return (
            <span className={Style.avatar}>
              <span>{d.avatar}</span>
            </span>
          );
        }
      })}
    </div>
  );
};

export default Avatars;

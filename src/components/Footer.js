import React, { Component } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div className="w-full flex flex-col  items-center gap-y-6 pt-32">
        <div className="items-start w-3/4 flex gap-x-8 pl-3">
          <a href="">
            <FaFacebookF size={24} color="white"></FaFacebookF>
          </a>
          <a href="https://www.instagram.com/eyyupii/" target="_blank">
            <FaInstagram size={24} color="white"></FaInstagram>
          </a>
          <a href="https://twitter.com/eyyupii" target="_blank">
            <FaTwitter size={24} color="white"></FaTwitter>
          </a>
          <a href="">
            <FaYoutube size={24} color="white"></FaYoutube>
          </a>
        </div>
        <div className="grid grid-cols-2 w-3/4 text-sm gap-y-3 gap-x-3 font-netflixsansregular md:grid-cols-4 md:gap-x-0">
          <span>Seslendirme ve Alt Yazı</span>
          <span>Sesli Betimleme</span>
          <span>Yardım Merkezi</span>
          <span>Hediye Kartları</span>
          <span>Medya Merkezi</span>

          <span>Yatırımcı İlişkileri</span>
          <span>İş İmkanları</span>
          <span>Kullanım Koşulları</span>
          <span>Gizlilik</span>
          <span>Yasal Hükümler</span>
          <span>Çerez Tercihleri</span>
          <span>Kurumsal Bilgiler</span>
          <span>Bize Ulaşın</span>
        </div>

        <div className="items-start w-3/4">
          <span className=" px-1.5 py-1.5 border-netflix-gray text-sm border-[1px] hover:text-white">
            Hizmet Kodu
          </span>
        </div>
        <div className="items-start w-3/4 text-xs">
          &copy; 1997-2022 Netflix, Inc.
          &#123;9dex75e2-1219-42e9-ayy5-b78a455253a1&#125;
        </div>
      </div>
    );
  }
}

export default Footer;

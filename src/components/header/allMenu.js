import React from "react";
import { menu, create } from "../../data/allMenu";
import AllMenuItem from "./allMenuItem";

const AllMenu = () => {
  return (
    <div className="all_menu">
      <div className="all_menu_header">Menu</div>
      <div className="all_menu_wrap scrollbar">
        <div className="all_left">
          <div className="all_menu_search">
            <i className="amm_s_ic"></i>
            <input type="text" placeholder="Tìm kiếm trong menu" />
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Xã hội</div>
            {menu.slice(0, 6).map((item, index) => (
              <AllMenuItem
                icon={item.icon}
                description={item.description}
                name={item.name}
                key={index}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Giải trí</div>
            {menu.slice(6, 9).map((item, index) => (
              <AllMenuItem
                icon={item.icon}
                description={item.description}
                name={item.name}
                key={index}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Mua sắm</div>
            {menu.slice(9, 11).map((item, index) => (
              <AllMenuItem
                icon={item.icon}
                description={item.description}
                name={item.name}
                key={index}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Cá nhân</div>
            {menu.slice(11, 15).map((item, index) => (
              <AllMenuItem
                icon={item.icon}
                description={item.description}
                name={item.name}
                key={index}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Chuyên nghiệp</div>
            {menu.slice(15, 17).map((item, index) => (
              <AllMenuItem
                icon={item.icon}
                description={item.description}
                name={item.name}
                key={index}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Nguồn lực cho cộng đồng</div>
            {menu.slice(17, 21).map((item, index) => (
              <AllMenuItem
                icon={item.icon}
                description={item.description}
                name={item.name}
                key={index}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Sản phẩm khác của Meta</div>
            {menu.slice(21, 23).map((item, index) => (
              <AllMenuItem
                icon={item.icon}
                description={item.description}
                name={item.name}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="all_right">
          <div className="all_right_header">Tạo</div>
          {create.map((item, index) => (
            <div className="all_right_item hover1" key={index}>
              <div className="all_right_circle">
                <i className={item.icon}></i>
              </div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMenu;

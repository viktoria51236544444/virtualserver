import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import styles from "./home.module.css";
import Group1 from "./SidebarSvg/Group 2226.svg";
import Group2 from "./SidebarSvg/Group 2215.svg";
import Group3 from "./SidebarSvg/Group 2213.svg";
import Group4 from "./SidebarSvg/Group 2212.svg";
import Group5 from "./SidebarSvg/Group 2201.svg";
import Group6 from "./SidebarSvg/Group 2225.svg";
import Group7 from "./SidebarSvg/Group 2220.svg";
import Group26 from "./SidebarSvg/Group 26.svg";
import { Modal, Backdrop, Fade, Button } from "@mui/material";

const drawerWidth = 290;

const navigationItems = {
  servers: {
    text: "Мои сервера",
    icon: Group1,
    link: "/myserver",
  },
  order: {
    text: "Заказать сервер",
    icon: Group2,
    link: "/order",
  },
  config: {
    text: "Конфигурация",
    icon: Group3,
    link: "/config",
  },
  tickets: {
    text: "Мои тикеты",
    icon: Group4,
  },
  news: {
    text: "Новости",
    icon: Group5,
  },
  questions: {
    text: "Вопросы",
    icon: Group6,
  },
  help: {
    text: "Помощь",
    icon: Group7,
  },
};
function Sidebar(props) {
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [selectedItem, setSelectedItem] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("ru");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = (lang) => {
    setAnchorEl(null);
    setSelectedLanguage(lang);
  };

  const isMenuOpen = Boolean(anchorEl);

  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.container}>
      <CssBaseline />
      <Box
        sx={{
          width: `calc(98% - ${drawerWidth}px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          marginLeft: "20%",
          backgroundColor: "white",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          height: "80px",
          marginTop: "1%",
        }}
      >
        <div className={styles.search__container}>
          <input
            className={styles.search__input}
            type="text"
            placeholder={t("search")}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginLeft: "30%",
          }}
        >
          <p>2000$</p>
          <img style={{ width: "40px" }} src={Group26} alt="" />
          <Button onClick={handleOpenModal}>Пополнить</Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleCloseModal}
            closeAfterTransition
          >
            <Fade
              style={{
                marginLeft: "35%",
                marginTop: "5%",
                borderRadius: "10px",
                width: "30%",
                height: "40%",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
              }}
              in={openModal}
            >
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  padding: "80px",
                }}
                className={styles.modal}
              >
                <h2 id="transition-modal-title">Как можно пополнить</h2>
                <p style={{ margin: "15" }}>О!Деньги: 996501304053</p>
                <p style={{ margin: "0" }}>Mbank: 996501304053</p>
                <Button
                  variant="contained"
                  component="label"
                  style={{
                    transition: "background-color 0.3s",
                    marginBottom: "-15%",
                    marginTop: "15%",
                    "&:hover": {
                      backgroundColor: "#4caf50",
                    },
                  }}
                >
                  Прикрепить чек
                  <input type="file" style={{ display: "none" }} />
                </Button>
              </div>
            </Fade>
          </Modal>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
          <p>admin@gmail.com</p>
        </div>
        <div className={styles.navbarRight}>
          <IconButton onClick={handleLanguageClick}>
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={() => handleLanguageClose(selectedLanguage)}
          >
            <MenuItem onClick={() => handleLanguageClose("ru")}>
              Русский
            </MenuItem>
            <MenuItem onClick={() => handleLanguageClose("en")}>
              English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageClose("kg")}>
              Кыргызча
            </MenuItem>
          </Menu>
        </div>
      </Box>

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          fontFamily: "Nunito",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#fff",
              color: "#25396f",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            },
          }}
          open
        >
          <div className={styles.container__header_sidebar}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <p>Business Soft</p>
            </Link>
          </div>
          <div>
            <List>
              {Object.entries(navigationItems).map(([itemId, item]) => (
                <Link
                  key={itemId}
                  to={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItem
                    disablePadding
                    className={`${styles.listItem} ${
                      selectedItem === itemId ? styles.selectedItem : ""
                    }`}
                  >
                    <ListItemButton onClick={() => handleItemClick(itemId)}>
                      <ListItemIcon className={styles.listItemIcon}>
                        <img style={{ width: "20px" }} src={item.icon} alt="" />
                      </ListItemIcon>
                      <ListItemText
                        className={styles.listItemText}
                        primary={t(item.text)}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
      </Box>
    </div>
  );
}

export default Sidebar;

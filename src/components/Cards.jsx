import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import img from "../assets/image.png";
import img1 from "../assets/furni-design.png";
import img2 from "../assets/Ochi-design.png";
import img3 from "../assets/Task-List.png";

export default function Cards() {
  return (
    <div div className="flex justify-center flex-col p-10">
      <h1 className="font-[anzo3] text-[4vw]">Projects</h1>
      <div className="p-10 flex flex-wrap gap-3">
        <Card
          sx={{
            maxWidth: 405,
            borderRadius: "5px",
            background: "black",
            color: "#fff",
          }}
        >
          <CardMedia sx={{ height: 140 }} image={img} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sundown Studio
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Developed Sundown Studio, a dynamic web project with a sleek
              design using HTML, CSS, and JavaScript. Implemented secure
              features for a user-friendly and protected interface, showcasing
              the studio’s capabilities.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{ background: "blue", color: "#fff" }}
              href="https://github.com/soban-mahmood/Sundown-studio-clone"
            >
              Code
            </Button>
            <Button
              size="small"
              sx={{ background: "blue", color: "#fff" }}
              href="https://sundown-studio-clone-peach.vercel.app/"
            >
              Visit
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 400,
            borderRadius: "5px",
            background: "black",
            color: "#fff",
          }}
        >
          <CardMedia sx={{ height: 140 }} image={img1} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Furni Web-design
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Developed Furni Design, a modern web app using ReactJS and
              Tailwind CSS for a sleek responsive interface. Created a
              user-friendly platform with seamless navigation and enhanced user
              experience
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{ background: "blue", color: "#fff" }}
              href="https://github.com/soban-mahmood/Furni-design"
            >
              Code
            </Button>
            <Button
              size="small"
              sx={{ background: "blue", color: "#fff" }}
              href="https://furni-design.vercel.app/"
            >
              Visit
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 400,
            borderRadius: "5px",
            background: "black",
            color: "#fff",
          }}
        >
          <CardMedia sx={{ height: 140 }} image={img2} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ochi Web-design
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Developed Ochi Design, a modern, responsive website using React.js
              and Tailwind CSS.Implemented interactive UI components for
              seamless navigation
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{ background: "blue", color: "#fff" }}
              href="https://github.com/soban-mahmood/Ochi-Clone"
            >
              Code
            </Button>
            <Button
              size="small"
              sx={{ background: "blue", color: "#fff" }}
              href="https://ochi-clone-one.vercel.app/"
            >
              Visit
            </Button>
          </CardActions>
        </Card>
          
        <Card
          sx={{
            maxWidth: 400,
            borderRadius: "5px",
            background: "black",
            color: "#fff",
          }}
        >
          <CardMedia sx={{ height: 140 }} image={img3} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Todo Task-list
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
            Completed task list in which i use firebase for authentication and for data storage and use moment.js for filter the the task according to the task submit date using ReactJs for main Frontend and tailwind css for styling .
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{ background: "blue", color: "#fff" }}
              href="https://github.com/soban-mahmood/Task-list "
            >
              Code
            </Button>
            <Button
              size="small"
              sx={{ background: "blue", color: "#fff" }}
              href="https://task-list-lac.vercel.app/"
            >
              Visit
            </Button>
          </CardActions>
        </Card>
        
      </div>
    </div>
  );
}

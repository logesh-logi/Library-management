import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

function Header() {
  const card = (
    <>
      <div className="bg-black text-white">
        <CardContent>
          <h4>Book Count {}</h4>
        </CardContent>
      </div>
    </>
  );
  return (
    <>
      <div>
        <Box sx={{ maxWidth: 275 }}>
          <Card className="m-10">{card}</Card>
        </Box>
      </div>
      <div className=""></div>
    </>
  );
}

export default Header;

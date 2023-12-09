import Logo from "/LogoSkilHealth.png"

function Loading(){
    return (
        <div className="flex justify-center items-center mt-60">
          <img src={Logo} alt="logo" className="w-20 h-20 object-cover animate-spin" />
        </div>
      );
}

export default Loading
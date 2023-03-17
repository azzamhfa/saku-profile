import React from "react";

const Box = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 text-white p-4 md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h2 className="text-2xl mb-4">Responsive Component</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
          purus sed lacus dictum, ac tincidunt neque tristique. Integer laoreet
          arcu sed ex gravida, eget rutrum odio hendrerit.
        </p>
        <p>
          Nulla facilisi. Nam non tincidunt sapien, non tincidunt sapien. Duis
          suscipit nunc vel est cursus, sed pulvinar purus luctus. Aliquam erat
          volutpat. Suspendisse potenti. In hac habitasse platea dictumst.
        </p>
        {/* more content */}
      </div>
    </div>
  );
};

export default Box;

import { asyncHnadler } from "../utils/asyncHandler.js";
import { Apierror } from "../utils/apiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { log } from "console";

const registerUser = asyncHnadler(async (req, res) =>{
    
    const { userName, email, fullName, password} = req.body

    if(
        [fullName, email, userName, password].some((field) => field?.trim() === "")
    ){
        throw new Apierror(400,"All Fields Must Be Required !! ")
    }

    const userExisted = await User.findOne({
            $or:[{ userName },{ email }],
    })

    if (userExisted) {
        throw new Apierror(409,"User Already Exist")
    }
    
    const avatarLocalPath = req.files?.avatar[0]?.path;
    //const coverImageLocalPath = req.files?.coverImage[0]?.path;

    console.log(avatarLocalPath);
    
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }
    console.log(coverImageLocalPath);
    

    if (!avatarLocalPath) {
        throw new Apierror(400, "Avatar file is required")
    }
    
    
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    console.log(avatar);
    
    if (!avatar) {
        throw new Apierror(400, "Avatar file is required")
    }
   

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email, 
        password,
        userName: userName.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new Apierror(500, "Something Went Wrong While Regestering The User!!")
    }

    res.status(201).json(
        new Apiresponse(200, createdUser, "Succesfully Registered")
    )

})

export default registerUser
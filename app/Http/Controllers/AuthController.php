<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
class AuthController extends Controller
{
    public function register(Request $request)
    {
      
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
          
        ]);
   
        if($validator->fails()){
            return $validator->errors();    
        }
   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        
       
        $response_array = array('status' => true, 'user' => $user,'token'=>$success);
        return response()->json($response_array, 200);
    }

    public function login(Request $request)
    {
        
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            
        ]);
        $credentials = request(['email', 'password']);
        if(Auth::attempt($credentials))
        {
            $user=$request->user();
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->token;
           
            $token->save();
            return response()->json([
                'user'=>$user,
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'status'=>true
               
            ]);
        }
        else 
        {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }
           
      

    }

    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        // $response = ['message' => 'You have been successfully logged out!'];
        return response(['status'=>true,'message'=>'You have logout !'], 200);
    }

    public function users()
    {
        return response()->json(User::get());
    }
}

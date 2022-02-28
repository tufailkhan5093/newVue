<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function addcategory(Request $request)
    {
        
        $category=new Category();
        $category->name=$request->name;
        $imageName = time().'.'.$request->image->extension();
        $request->image->move(public_path('images'), $imageName);

        $category->image=$imageName;
        $category->save();
        return $category;
    }
}

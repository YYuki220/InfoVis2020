class Vec3
{
    //Constructor
    constructor(x,y,z)
    {   
    this.x=x;
    this.y=y;
    this.z=z;
    }

    add(v)
    {
    this.x +=v.x;
    this.y +=v.y;
    this.z +=v.z;
    return this;
    }

    sum(v)
    {
    return this.x+this.y+this.z;
    }

    min(v)
    {
    return (Math.min(this.x,this.y,this.z));
    }



}




/*//Constructor
Vec3 = function(x,y,z)
{
    this.x=x;
    this.y=y;
    this.z=z;
}

//Add method
Vec3.prototype.add=function(v)
{
    this.x=x;
    this.y=y;
    this.z=z;
    return this;
}

Vec3.prototype.sum=function()
{
    return this.x+this.y+this.z;
}
/*
Vec3.prototype.min=funcion()
{
    return (Math.min(this.x,this.y,this.z));
}

Vec3.prototype.max=funcion()
{
    return (Math.max(this.x,this.y,this.z));
}

Vec3.prototype.mid=funcion()
{
    return (Math.median(this.x,this.y,this.z));
}
*/
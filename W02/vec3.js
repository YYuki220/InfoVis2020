class Vec3
{
    //Constructor
    constructor(x,y,z)
    {   
    this.x = x;
    this.y = y;
    this.z = z;
    }

    add(v)
    {
        var a = this.x+v.x;
        var b = this.y+v.y;
        var c = this.z+v.z;
        return new Vec3(a,b,c); 
    }

    sub(v)
    {
        var a = this.x-v.x;
        var b = this.y-v.y;
        var c = this.z-v.z;
        return new Vec3(a,b,c); 
    }

    sum(v)
    {
    return this.x+this.y+this.z;
    }

    min(v)
    {
    return (Math.min(this.x,this.y,this.z));
    }

    max(v)
    {
    return (Math.max(this.x,this.y,this.z));
    }

    mid (v)
    {
        var a = this.x;
        var b = this.y;
        var c = this.z;
        if (a>b&&a>c)
            if (b>c) return b;
            else  return c;
        if (b>a&&b>c)
           if (a>c) return a;
            else  return c;
        if (c>a&&c>b)
            if (a>b) return a;
            else  return b;
    
    }

    Cpro(v)
    {
        var a=this.y*v.z-this.z*v.y;
        var b=this.z*v.x-this.x*v.z;
        var c=this.x*v.y-this.y*v.x;
        return new Vec3(a,b,c);
    }




}


AFRAME.registerComponent('car',{
    schema:{
        pathmtl : {type:'string',default:'obj.mtl'},
        pathobj : {type:'string',default:'tinker.obj'}
    },
    init: function(){
        this.el.setAttribute("obj-model", {
            obj:this.data.pathobj,
            mtl:this.data.pathmtl,
        }
        )
        this.el.setAttribute("position",{x:0,y:0,z:0});
        this.el.setAttribute("rotation",{x:-90,y:0,z:0});
        this.el.setAttribute("scale",{x:0.3,y:0.3,z:0.3});
    }
});
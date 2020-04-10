define(["exports","./when-c2e8ef35","./Check-c4f3a3fc","./Cartesian2-e875d9d2","./Transforms-44592b02","./ComponentDatatype-5d3f6452","./GeometryAttribute-4098b8de","./GeometryAttributes-57608efc","./GeometryOffsetAttribute-e6e9672c","./VertexFormat-ad523db1"],function(e,l,t,d,b,C,v,z,F,m){"use strict";var w=new d.Cartesian3;function u(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).minimum,a=e.maximum,n=l.defaultValue(e.vertexFormat,m.VertexFormat.DEFAULT);this._minimum=d.Cartesian3.clone(t),this._maximum=d.Cartesian3.clone(a),this._vertexFormat=n,this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxGeometry"}u.fromDimensions=function(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).dimensions,a=d.Cartesian3.multiplyByScalar(t,.5,new d.Cartesian3);return new u({minimum:d.Cartesian3.negate(a,new d.Cartesian3),maximum:a,vertexFormat:e.vertexFormat,offsetAttribute:e.offsetAttribute})},u.fromAxisAlignedBoundingBox=function(e){return new u({minimum:e.minimum,maximum:e.maximum})},u.packedLength=2*d.Cartesian3.packedLength+m.VertexFormat.packedLength+1,u.pack=function(e,t,a){return a=l.defaultValue(a,0),d.Cartesian3.pack(e._minimum,t,a),d.Cartesian3.pack(e._maximum,t,a+d.Cartesian3.packedLength),m.VertexFormat.pack(e._vertexFormat,t,a+2*d.Cartesian3.packedLength),t[a+2*d.Cartesian3.packedLength+m.VertexFormat.packedLength]=l.defaultValue(e._offsetAttribute,-1),t};var a,s=new d.Cartesian3,y=new d.Cartesian3,p=new m.VertexFormat,x={minimum:s,maximum:y,vertexFormat:p,offsetAttribute:void 0};u.unpack=function(e,t,a){t=l.defaultValue(t,0);var n=d.Cartesian3.unpack(e,t,s),r=d.Cartesian3.unpack(e,t+d.Cartesian3.packedLength,y),i=m.VertexFormat.unpack(e,t+2*d.Cartesian3.packedLength,p),o=e[t+2*d.Cartesian3.packedLength+m.VertexFormat.packedLength];return l.defined(a)?(a._minimum=d.Cartesian3.clone(n,a._minimum),a._maximum=d.Cartesian3.clone(r,a._maximum),a._vertexFormat=m.VertexFormat.clone(i,a._vertexFormat),a._offsetAttribute=-1===o?void 0:o,a):(x.offsetAttribute=-1===o?void 0:o,new u(x))},u.createGeometry=function(e){var t=e._minimum,a=e._maximum,n=e._vertexFormat;if(!d.Cartesian3.equals(t,a)){var r,i,o=new z.GeometryAttributes;if(n.position&&(n.st||n.normal||n.tangent||n.bitangent)){if(n.position&&((i=new Float64Array(72))[0]=t.x,i[1]=t.y,i[2]=a.z,i[3]=a.x,i[4]=t.y,i[5]=a.z,i[6]=a.x,i[7]=a.y,i[8]=a.z,i[9]=t.x,i[10]=a.y,i[11]=a.z,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=a.x,i[16]=t.y,i[17]=t.z,i[18]=a.x,i[19]=a.y,i[20]=t.z,i[21]=t.x,i[22]=a.y,i[23]=t.z,i[24]=a.x,i[25]=t.y,i[26]=t.z,i[27]=a.x,i[28]=a.y,i[29]=t.z,i[30]=a.x,i[31]=a.y,i[32]=a.z,i[33]=a.x,i[34]=t.y,i[35]=a.z,i[36]=t.x,i[37]=t.y,i[38]=t.z,i[39]=t.x,i[40]=a.y,i[41]=t.z,i[42]=t.x,i[43]=a.y,i[44]=a.z,i[45]=t.x,i[46]=t.y,i[47]=a.z,i[48]=t.x,i[49]=a.y,i[50]=t.z,i[51]=a.x,i[52]=a.y,i[53]=t.z,i[54]=a.x,i[55]=a.y,i[56]=a.z,i[57]=t.x,i[58]=a.y,i[59]=a.z,i[60]=t.x,i[61]=t.y,i[62]=t.z,i[63]=a.x,i[64]=t.y,i[65]=t.z,i[66]=a.x,i[67]=t.y,i[68]=a.z,i[69]=t.x,i[70]=t.y,i[71]=a.z,o.position=new v.GeometryAttribute({componentDatatype:C.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:i})),n.normal){var m=new Float32Array(72);m[0]=0,m[1]=0,m[2]=1,m[3]=0,m[4]=0,m[5]=1,m[6]=0,m[7]=0,m[8]=1,m[9]=0,m[10]=0,m[11]=1,m[12]=0,m[13]=0,m[14]=-1,m[15]=0,m[16]=0,m[17]=-1,m[18]=0,m[19]=0,m[20]=-1,m[21]=0,m[22]=0,m[23]=-1,m[24]=1,m[25]=0,m[26]=0,m[27]=1,m[28]=0,m[29]=0,m[30]=1,m[31]=0,m[32]=0,m[33]=1,m[34]=0,m[35]=0,m[36]=-1,m[37]=0,m[38]=0,m[39]=-1,m[40]=0,m[41]=0,m[42]=-1,m[43]=0,m[44]=0,m[45]=-1,m[46]=0,m[47]=0,m[48]=0,m[49]=1,m[50]=0,m[51]=0,m[52]=1,m[53]=0,m[54]=0,m[55]=1,m[56]=0,m[57]=0,m[58]=1,m[59]=0,m[60]=0,m[61]=-1,m[62]=0,m[63]=0,m[64]=-1,m[65]=0,m[66]=0,m[67]=-1,m[68]=0,m[69]=0,m[70]=-1,m[71]=0,o.normal=new v.GeometryAttribute({componentDatatype:C.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:m})}if(n.st){var u=new Float32Array(48);u[0]=0,u[1]=0,u[2]=1,u[3]=0,u[4]=1,u[5]=1,u[6]=0,u[7]=1,u[8]=1,u[9]=0,u[10]=0,u[11]=0,u[12]=0,u[13]=1,u[14]=1,u[15]=1,u[16]=0,u[17]=0,u[18]=1,u[19]=0,u[20]=1,u[21]=1,u[22]=0,u[23]=1,u[24]=1,u[25]=0,u[26]=0,u[27]=0,u[28]=0,u[29]=1,u[30]=1,u[31]=1,u[32]=1,u[33]=0,u[34]=0,u[35]=0,u[36]=0,u[37]=1,u[38]=1,u[39]=1,u[40]=0,u[41]=0,u[42]=1,u[43]=0,u[44]=1,u[45]=1,u[46]=0,u[47]=1,o.st=new v.GeometryAttribute({componentDatatype:C.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:u})}if(n.tangent){var s=new Float32Array(72);s[0]=1,s[1]=0,s[2]=0,s[3]=1,s[4]=0,s[5]=0,s[6]=1,s[7]=0,s[8]=0,s[9]=1,s[10]=0,s[11]=0,s[12]=-1,s[13]=0,s[14]=0,s[15]=-1,s[16]=0,s[17]=0,s[18]=-1,s[19]=0,s[20]=0,s[21]=-1,s[22]=0,s[23]=0,s[24]=0,s[25]=1,s[26]=0,s[27]=0,s[28]=1,s[29]=0,s[30]=0,s[31]=1,s[32]=0,s[33]=0,s[34]=1,s[35]=0,s[36]=0,s[37]=-1,s[38]=0,s[39]=0,s[40]=-1,s[41]=0,s[42]=0,s[43]=-1,s[44]=0,s[45]=0,s[46]=-1,s[47]=0,s[48]=-1,s[49]=0,s[50]=0,s[51]=-1,s[52]=0,s[53]=0,s[54]=-1,s[55]=0,s[56]=0,s[57]=-1,s[58]=0,s[59]=0,s[60]=1,s[61]=0,s[62]=0,s[63]=1,s[64]=0,s[65]=0,s[66]=1,s[67]=0,s[68]=0,s[69]=1,s[70]=0,s[71]=0,o.tangent=new v.GeometryAttribute({componentDatatype:C.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:s})}if(n.bitangent){var y=new Float32Array(72);y[0]=0,y[1]=1,y[2]=0,y[3]=0,y[4]=1,y[5]=0,y[6]=0,y[7]=1,y[8]=0,y[9]=0,y[10]=1,y[11]=0,y[12]=0,y[13]=1,y[14]=0,y[15]=0,y[16]=1,y[17]=0,y[18]=0,y[19]=1,y[20]=0,y[21]=0,y[22]=1,y[23]=0,y[24]=0,y[25]=0,y[26]=1,y[27]=0,y[28]=0,y[29]=1,y[30]=0,y[31]=0,y[32]=1,y[33]=0,y[34]=0,y[35]=1,y[36]=0,y[37]=0,y[38]=1,y[39]=0,y[40]=0,y[41]=1,y[42]=0,y[43]=0,y[44]=1,y[45]=0,y[46]=0,y[47]=1,y[48]=0,y[49]=0,y[50]=1,y[51]=0,y[52]=0,y[53]=1,y[54]=0,y[55]=0,y[56]=1,y[57]=0,y[58]=0,y[59]=1,y[60]=0,y[61]=0,y[62]=1,y[63]=0,y[64]=0,y[65]=1,y[66]=0,y[67]=0,y[68]=1,y[69]=0,y[70]=0,y[71]=1,o.bitangent=new v.GeometryAttribute({componentDatatype:C.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})}(r=new Uint16Array(36))[0]=0,r[1]=1,r[2]=2,r[3]=0,r[4]=2,r[5]=3,r[6]=6,r[7]=5,r[8]=4,r[9]=7,r[10]=6,r[11]=4,r[12]=8,r[13]=9,r[14]=10,r[15]=8,r[16]=10,r[17]=11,r[18]=14,r[19]=13,r[20]=12,r[21]=15,r[22]=14,r[23]=12,r[24]=18,r[25]=17,r[26]=16,r[27]=19,r[28]=18,r[29]=16,r[30]=20,r[31]=21,r[32]=22,r[33]=20,r[34]=22,r[35]=23}else(i=new Float64Array(24))[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=a.x,i[4]=t.y,i[5]=t.z,i[6]=a.x,i[7]=a.y,i[8]=t.z,i[9]=t.x,i[10]=a.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=a.z,i[15]=a.x,i[16]=t.y,i[17]=a.z,i[18]=a.x,i[19]=a.y,i[20]=a.z,i[21]=t.x,i[22]=a.y,i[23]=a.z,o.position=new v.GeometryAttribute({componentDatatype:C.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:i}),(r=new Uint16Array(36))[0]=4,r[1]=5,r[2]=6,r[3]=4,r[4]=6,r[5]=7,r[6]=1,r[7]=0,r[8]=3,r[9]=1,r[10]=3,r[11]=2,r[12]=1,r[13]=6,r[14]=5,r[15]=1,r[16]=2,r[17]=6,r[18]=2,r[19]=3,r[20]=7,r[21]=2,r[22]=7,r[23]=6,r[24]=3,r[25]=0,r[26]=4,r[27]=3,r[28]=4,r[29]=7,r[30]=0,r[31]=1,r[32]=5,r[33]=0,r[34]=5,r[35]=4;var p=d.Cartesian3.subtract(a,t,w),x=.5*d.Cartesian3.magnitude(p);if(l.defined(e._offsetAttribute)){var f=i.length,c=new Uint8Array(f/3),A=e._offsetAttribute===F.GeometryOffsetAttribute.NONE?0:1;F.arrayFill(c,A),o.applyOffset=new v.GeometryAttribute({componentDatatype:C.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:c})}return new v.Geometry({attributes:o,indices:r,primitiveType:v.PrimitiveType.TRIANGLES,boundingSphere:new b.BoundingSphere(d.Cartesian3.ZERO,x),offsetAttribute:e._offsetAttribute})}},u.getUnitBox=function(){return l.defined(a)||(a=u.createGeometry(u.fromDimensions({dimensions:new d.Cartesian3(1,1,1),vertexFormat:m.VertexFormat.POSITION_ONLY}))),a},e.BoxGeometry=u});

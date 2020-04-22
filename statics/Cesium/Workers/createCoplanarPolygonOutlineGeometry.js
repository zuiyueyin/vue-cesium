define(["./when-7ef6387a","./Check-ed6a1804","./Math-c73e522c","./Cartesian2-51a0e5d9","./Transforms-5dbe1e69","./RuntimeError-5b606d78","./WebGLConstants-30fc6f5c","./ComponentDatatype-3593b1c2","./GeometryAttribute-09b6f80a","./GeometryAttributes-cb18da36","./AttributeCompression-71f76a0f","./GeometryPipeline-732fc801","./EncodedCartesian3-5b89decc","./IndexDatatype-62984545","./IntersectionTests-ec45b34f","./Plane-d218010a","./GeometryInstance-661ad18e","./arrayRemoveDuplicates-6b77de25","./EllipsoidTangentPlane-04d2a197","./OrientedBoundingBox-3e897e58","./CoplanarPolygonGeometryLibrary-a3b16d00","./ArcType-2ee8dfbb","./EllipsoidRhumbLine-565de3a6","./PolygonPipeline-2b52418d","./PolygonGeometryLibrary-e7222196"],function(a,e,t,c,p,r,n,s,u,d,o,m,i,g,y,l,f,b,h,P,G,v,L,C,T){"use strict";function E(e){for(var t=e.length,r=new Float64Array(3*t),n=g.IndexDatatype.createTypedArray(t,2*t),o=0,a=0,i=0;i<t;i++){var y=e[i];r[o++]=y.x,r[o++]=y.y,r[o++]=y.z,n[a++]=i,n[a++]=(i+1)%t}var l=new d.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r})});return new u.Geometry({attributes:l,indices:n,primitiveType:u.PrimitiveType.LINES})}function k(e){var t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=T.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+1}k.fromPositions=function(e){return new k({polygonHierarchy:{positions:(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).positions}})},k.pack=function(e,t,r){return r=a.defaultValue(r,0),t[r=T.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,r)]=e.packedLength,t};var H={polygonHierarchy:{}};return k.unpack=function(e,t,r){t=a.defaultValue(t,0);var n=T.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=n.startingIndex,delete n.startingIndex;var o=e[t];return a.defined(r)||(r=new k(H)),r._polygonHierarchy=n,r.packedLength=o,r},k.createGeometry=function(e){var t=e._polygonHierarchy,r=t.positions;if(!((r=b.arrayRemoveDuplicates(r,c.Cartesian3.equalsEpsilon,!0)).length<3)&&G.CoplanarPolygonGeometryLibrary.validOutline(r)){var n=T.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(t,!1);if(0!==n.length){for(var o=[],a=0;a<n.length;a++){var i=new f.GeometryInstance({geometry:E(n[a])});o.push(i)}var y=m.GeometryPipeline.combineInstances(o)[0],l=p.BoundingSphere.fromPoints(t.positions);return new u.Geometry({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:l})}}},function(e,t){return a.defined(t)&&(e=k.unpack(e,t)),e._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),k.createGeometry(e)}});
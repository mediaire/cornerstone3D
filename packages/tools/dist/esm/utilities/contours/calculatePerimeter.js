import { vec3 } from 'gl-matrix';
export function calculatePerimeter(polyline, closed) {
    let perimeter = 0;
    for (let i = 0; i < polyline.length - 1; i++) {
        const point1 = polyline[i];
        const point2 = polyline[i + 1];
        perimeter += vec3.dist(point1, point2);
    }
    if (closed) {
        const firstPoint = polyline[0];
        const lastPoint = polyline[polyline.length - 1];
        perimeter += vec3.dist(firstPoint, lastPoint);
    }
    return perimeter;
}
export default calculatePerimeter;

// $('.first.circle').circleProgress({
//     value: 0.39
// }).on('circle-animation-progress', function(event, progress) {
//     $(this).find('strong').html(parseInt(39 * progress) + '<i>%</i>');
// });
// $('.second.circle').circleProgress({
//     value: 0.45
// }).on('circle-animation-progress', function(event, progress) {
//     $(this).find('strong').html(parseInt(45 * progress) + '<i>%</i>');
// });
// $('.third.circle').circleProgress({
//     value: 0.45
// }).on('circle-animation-progress', function(event, progress) {
//     $(this).find('strong').html(parseInt(40 * progress) + '<i>%</i>');
// });
// $('.fourth.circle').circleProgress({
//     value: 0.55
// }).on('circle-animation-progress', function(event, progress) {
//     $(this).find('strong').html(parseInt(55 * progress) + '<i>%</i>');
// });
// $('.fifth.circle').circleProgress({
//     value: 0.45
// }).on('circle-animation-progress', function(event, progress) {
//     $(this).find('strong').html(parseInt(45 * progress) + '<i>%</i>');
// });
$('.sixth.circle').circleProgress({
    value: 0.37
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(37 * progress) + '<i>%</i>');
});
$('.eightieth.circle').circleProgress({
    value: 0.80
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
});
$('.ninetieth.circle').circleProgress({
    value: 0.90
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});
// $('.ninety-fifth.circle').circleProgress({
//     value: 0.95
// }).on('circle-animation-progress', function(event, progress) {
//     $(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');
// });
circleProgress('ninety-fifth', 95)
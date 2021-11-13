<template>
  <div
    ref="heatmap"
    :style="`width: ${mapWidth}; height: ${mapHeight}; display: flex`"/>
</template>

<style>


</style>


<script>
export default {
  name: 'c-heat-map',
  props: {
    lat: {
      type: Number,
      default: () => 1.3521
    },
    lng: {
      type: Number,
      default: () => 103.8198
    },
    center: {
      type: Object,
      default: function () {
        return { lat: 1.3521, lng: 103.8198}
    }},
    initialZoom: {
      type: Number,
      default: () => 11
    },
    mapType: {
      type: String,
      default: () => 'terrain'
    },
    points: {
      type: Array,
      required: true
    },
    width: {
      type: [String, Number],
      default: () => '100%'
    },
    height: {
      type: [String, Number],
      default: () => '100%'
    },
    opacity: {
      type: Number,
      default: () => 1
    },
    maxIntensity: {
      type: Number,
      default: () => 5
    },
    // zoom: {
    //   type: [String, Number],
    //   default: () => '100%'
    // }
  },
  computed: {
    mapWidth () {
      if (typeof this.width === 'string') {
        return this.width
      } else {
        return `${this.width}px`
      }
    },
    mapHeight () {
      if (typeof this.height === 'string') {
        return this.height
      } else {
        return `${this.height}px`
      }
    },
    heatmapPoints () {
      return this.points.map(
        // eslint-disable-next-line
          point => new google.maps.LatLng(point.lat, point.lng)
      )
    }
    // zoomer () {
    //   return this.zoom
    // }
  },
  mounted () {
    return this.$gmapApiPromiseLazy().then(() => {
      // eslint-disable-next-line
        this.$mapObject = new google.maps.Map(this.$refs.heatmap, {
        zoom: this.initialZoom,
        center: { lat: this.lat, lng: this.lng },
        mapTypeId: this.mapType
      })
      // eslint-disable-next-line
        this.$heatmap = new google.maps.visualization.HeatmapLayer({
        data: this.heatmapPoints,
        map: this.$mapObject,
        opacity: this.opacity,
        maxIntensity: this.maxIntensity
      })

      this.$heatmap.setMap(this.$mapObject)
    })
  }
}
</script>
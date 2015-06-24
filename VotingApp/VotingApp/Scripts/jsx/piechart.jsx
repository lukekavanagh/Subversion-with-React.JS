var colors = ['#FD9827', '#DA3B21', '#3669C9', '#1D9524', '#971497' ];
var D3Legend = React.createClass({

	propTypes: {
	width: React.PropTypes.number,
	height: React.PropTypes.number,
	colors: React.PropTypes.array.isRequired,
	data: React.PropTypes.array.isRequired,
	},

	render: function() {
		var color = this.props.colors;
		var data = this.props.data;
		var elements = data.map(function(item, i){
			return (
			<LegendElement color={color} xpos="0" ypos={100+i*20} data={item.name} key={i} ikey={i}/>
			)
		})

		return(
		<svg className="legend" width={this.props.width} height={this.props.height}>{elements}</svg>
		);
		}
	});

var LegendElement = React.createClass({
	render: function() {
		var position = "translate(" + this.props.xpos + "," + this.props.ypos + ")";
		return (
		<g transform={position}>
		<rect width="18" height="18" fill={this.props.color[this.props.ikey]}></rect>
		<text x="24" y="9" dy=".35em">{this.props.data}</text>
		</g>
			);
		}
		});

var Sector = React.createClass({
	getInitialState: function() {
	return {text: '', opacity: 'arc'};
	},
	render: function() {
	 var outerRadius = this.props.width/2.2;
	 var innerRadius = this.props.width/8;
	 var arc = d3.svg.arc()
		.outerRadius(outerRadius)
		.innerRadius(innerRadius);
	var data = this.props.data;
	var center = "translate(" + arc.centroid(data) + ")";
	var percentCenter = "translate(0,3)";
	var color = this.props.colors;
	return (
		<g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.onClick}>
        <path className={this.state.opacity} fill={colors[this.props.ikey]} d={arc(this.props.data)}></path>
        <text fill="white" transform={center} textAnchor="middle" fontSize="15px">{data.value}</text>
        <text fill={colors[this.props.ikey]} stroke={color} fontSize="15px" transform={percentCenter} textAnchor="middle">{this.state.text}</text>
      </g>
    );
  },

   onMouseOver: function() {
    this.setState({text: '', opacity:'arc-hover'});
    var percent = (this.props.data.value/this.props.total)*100;
    percent = percent.toFixed(1);
    this.setState({text: percent + " %"});
  },
  onMouseOut: function() {
    this.setState({text: '', opacity:'arc'});
  },
  onClick: function() {
    alert("You clicked "+this.props.name);
  }
});
	
	var D

	)


	 }})


		
		)



}



			
		
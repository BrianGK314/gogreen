////Get Pie chart data

// Repeaded  code

function main(params) {
    return {
      params: {
        include_docs: true
      }
    };
  }
// End repeated code  
  
////Get Bar chart data


  function main(params) {
    return {
      entries: params.rows.map((row) => { return {
        country:row.doc.country,
        Technology:row.doc.Technology,
        Transport:row.doc.Transport,
        Power:row.doc.Power,
        Manufacturing:row.doc.Manufacturing,

        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }

////Get Pie chart data


function main(params) {
    return {
      entries: params.rows.map((row) => { return {

        label:row.doc.label,
        value:row.doc.value,

        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }

////Get Social Feed chart data


function main(params) {
    return {
      entries: params.rows.map((row) => { return {

        name:row.doc.name,
        text:row.doc.text,
        actsrc:row.doc.actsrc,
        profpic:row.doc.profpic,
        likes:row.doc.likes,

        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }

////Get RT-IoT chart data


function main(params) {
    return {
      entries: params.rows.map((row) => { return {

        x:row.doc.x,
        y:row.doc.y,

        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }

////Get Aggregated IoT Line chart data


function main(params) {
    return {
      entries: params.rows.map((row) => { return {
        data:row.doc.data,

        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }

////Get Progress Tracker data


function main(params) {
    return {
      entries: params.rows.map((row) => { return {
        name:row.doc.name,
        email:row.doc.email,
        age:row.doc.age,
        phone:row.doc.phone,
        progress:row.doc.progress,


        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }

////Get Emissions Cost Estimator data


function main(params) {
    return {
      entries: params.rows.map((row) => { return {
        costEstimate:row.doc.costEstimate,


        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }

////Get LSTM Demand Prediction data


function main(params) {
    return {
      entries: params.rows.map((row) => { return {
        demand:row.doc.demand,


        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }

////Get Land data


function main(params) {
    return {
      entries: params.rows.map((row) => { return {

        owner:row.doc.owner,
        location:row.doc.location,
        disputes:row.doc.disputes,
        status:row.doc.status,
        area:row.doc.area,
        allowed:row.doc.allowed,
        email:row.doc.email,
        src:row.doc.src,

        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }

////Get Companies data


function main(params) {
    return {
      entries: params.rows.map((row) => { return {

        
        name:row.doc.name,
        sum:row.doc.sum,
        email:row.doc.email,
        src:row.doc.src,

        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }

////Get Receipt data


function main(params) {
    return {
      entries: params.rows.map((row) => { return {

        title: row.doc.title,
        supplier:row.doc.supplier,
        quantity: row.doc.quantity,
        category: row.doc.category,
        material: row.doc.material,
        CO2: row.doc.co,
        pdf:row.doc.pdf,


        _id:row.doc._id, //must
        createdAt:row.doc.createdAt //must
      }})
    };
  }








  
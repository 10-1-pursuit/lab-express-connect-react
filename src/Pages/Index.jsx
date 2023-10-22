import Logs from '../components/Logs'


const Index = () => {
  return (
    <>
      <div className='Index'>
        <h2 className='badge bg-primary'>Hey, these are the Captains' quarters! </h2>
        <Logs/>
        {/* add buttons to take you logs/:id */}
        {/* <button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-secondary">4</span>
</button> */}
      </div>
    </>
  );
};

export default Index;

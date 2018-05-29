using System;
using System.Collections.Generic;
using System.Text;
using rebus.Business.Validation;
using rebus.Business.Validation.CustomAttributes;

namespace rebus.Business.Model
{
    public class LevelModel : Model
    {
        [RequiredObject]
        public string name { get; set; }

        [RequiredObject]
        public bool isPro { get; set; }

        public List<RebusModel> Rebuses { get; set; }

        public override ModelValidationResult Validate()
        {
            var result = new ModelValidator<LevelModel>().Validate(this);
            return result;
        }
    }
}
